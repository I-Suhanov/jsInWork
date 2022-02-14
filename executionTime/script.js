const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

    // const timerId = setTimeout(logger, 2000, "Hello");

btn.addEventListener('click', myAnimation);



// function logger (text) {
//     console.log(text);
//     i++;
//     if(i === 3){
//         clearInterval(timerId);
//     }
// }

// let id = setTimeout(function log(){
//     console.log("Hello");
//     id = setTimeout(log, 500);
// }, 500);