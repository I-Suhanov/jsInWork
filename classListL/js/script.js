"use strict";
    const btns = document.querySelectorAll('button'),
          wrapper = document.querySelector('.btn-block');
    // console.log(btns[0].classList.length);
    // console.log(btns[0].classList.item(1));
    // console.log(btns[0].classList.add('red', 'also'));
    // console.log(btns[0].classList.remove('blue'));
    // console.log(btns[0].classList.toggle('blue'));

    // if(btns[1].classList.contains('red')){
    //     console.log('Yes');
    // } else {
    //     console.log('No');
    // }

    btns[0].addEventListener('click', () => {
        // if (!btns[1].classList.contains('red')){
        //     btns[1].classList.add('red');
        // } else {
        //     btns[1].classList.remove('red');
        // }
        btns[1].classList.toggle('red');
    });

    //console.log(btns[0].className);

    //Делегирование событий
    wrapper.addEventListener('click', (e) => {
        // if(e.target && e.target.tagName == 'BUTTON'){
        //     console.log('Hello');
        // }
        if(e.target && e.target.matches('button.red')){
            console.log('Hello');
        }
        // if(e.target && e.target.classList.contains('blue')){
        //     console.log('Hello');
        // }
    });

    const btn = document.createElement('button');
    btn.classList.add('red');
    wrapper.append(btn);
