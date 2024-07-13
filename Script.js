const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');
const special = document.getElementById('special');
let count=0;

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('.One');
    let heart = document.createElement('span');
    heart.setAttribute('class', 's1');
    let x = e.clientX;
    let y = e.clientY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transFormValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transFormValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 1500);
});

function index(a,b){
    while(a>=b){
        a-=b;
    }
    return a;
}

function statusCal(current){
    console.log(current);
    let impStr='FLAMES'.split('');
    let lent = impStr.length ;
    let len = current.length;
    
    let i=0;
    while(i!==lent-1){
        let lens = index(len,impStr.length)-1;
        console.log(lens);
        impStr.splice(lens,1);
        console.log(impStr);
        i++;
    }
   
    return impStr.join('');

}

function output(cur){
    if(cur==='F'){
        result.textContent='Friends, 🫱🏼‍🫲🏽';
    }
    else if(cur==='L'){
        result.textContent='Love, 💘';
    }
    else if(cur==='A'){
        result.textContent='Affection, 🐶';
    }
    else if(cur==='M'){
        result.textContent='Marriage, 🛕';
    }
    else if(cur==='E'){
        result.textContent='Enemy, 🔪';
    }
    else if(cur==='S'){
        result.textContent='Siblings, 👩🏻‍🤝‍👨🏾';
    }
}

function forEver(){
    document.body.className='One';
    special.innerHTML=`
        <div class="banner">
            <video autoplay muted loop>
                <source src="bg.mp4" type="video/mp4">
            </video>
            <div id="sid">
                <div class="content">
                    <h1 class='titles' style="--duration: 1s">
                        <span Style="--delay: .5s">You're the</span>
                        <span Style="--delay: .8s">Only one for me</span>
                    </h1>
                </div>
                <p>"Forget labels(like friend, girlfriend and fiancee), you're the sun that warms my days, the moon that guides my nights, the very air I breathe. You're my soulmate. I love you."</p>
            </div>
        </div>
    `;
}

checkButton.addEventListener('click',function(){
    const yourName = document.getElementById('yourName');
    const partnerName = document.getElementById('partnerName');
    let cur='';
    let input1 = yourName.value;
    let input2 = partnerName.value;

    if(input1.toUpperCase()==='KAILASH'&&input2.toUpperCase()==='CHETNA' || input1.toUpperCase()==='CHETNA'&&input2.toUpperCase()==='KAILASH'){
        count++;
        if(count){
            forEver();
        }
    }

    let arr1 = input1.split('');
    let arr2 = input2.split('');

    if(input1.length>=input2.length){
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    arr1.splice(i, 1);
                    arr2.splice(j, 1);
                    i--; // Adjust the index after removal
                    break; // Exit the inner loop to check the next character in input1
                }
            }
        }
        input1 = arr1.join('');
        input2 = arr2.join('');
        cur = statusCal(input1+input2);
    }
    else{
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if (arr2[i] === arr1[j]) {
                    arr1.splice(j, 1);
                    arr2.splice(i, 1);
                    i--; // Adjust the index after removal
                    break; // Exit the inner loop to check the next character in input1
                }
            }
        }
        input1 = arr1.join('');
        input2 = arr2.join('');
        cur = statusCal(input2+input2);
    }

    output(cur);
})