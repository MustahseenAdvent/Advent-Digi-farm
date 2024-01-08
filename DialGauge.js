const HumidityDial  = document.getElementsByClassName('Humidity-dial')[0];
const block = document.getElementsByClassName('block');

const counter = document.querySelector('.counter');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

for (var i=1; i<100; i++){
    HumidityDial.innerHTML += "<div class='block'></div>";
    block[i].style.transform = "rotate("+3.6*i+"deg)";
    block[i].style.animationDelay = `${i/40}s`;
}

// const NumberCounter = () => {
//     const value = +counter.innerText;
//     if (value < target){
//         counter.innerText = Math.ceil(value + 1);
//         setTimeout(()=>{
//             NumberCounter()
//         },100)
//     }
// }

// NumberCounter();