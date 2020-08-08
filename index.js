document.getElementById("default").addEventListener('click', function(){
    document.querySelector('.header').classList.remove('main-blue');
    document.querySelector('.header').classList.remove('main-green');
    document.querySelector('.header').classList.remove('main-purple');

    document.querySelector('.header__frame').classList.remove('sec-blue');
    document.querySelector('.header__frame').classList.remove('sec-green');
    document.querySelector('.header__frame').classList.remove('sec-purple');

    document.querySelector('.container__nav').classList.remove('main-blue');
    document.querySelector('.container__nav').classList.remove('main-green');
    document.querySelector('.container__nav').classList.remove('main-purple');
});

document.getElementById("green").addEventListener('click', function(){
    document.querySelector('.header').classList.remove('main-blue');
    document.querySelector('.header').classList.remove('main-green');
    document.querySelector('.header').classList.remove('main-purple');

    document.querySelector('.header__frame').classList.remove('sec-blue');
    document.querySelector('.header__frame').classList.remove('sec-green');
    document.querySelector('.header__frame').classList.remove('sec-purple');

    document.querySelector('.container__nav').classList.remove('main-blue');
    document.querySelector('.container__nav').classList.remove('main-green');
    document.querySelector('.container__nav').classList.remove('main-purple');

    document.querySelector('.header').classList.add('main-green');

    document.querySelector('.header__frame').classList.add('sec-green');

    document.querySelector('.container__nav').classList.add('main-green');
});

document.getElementById("blue").addEventListener('click', function(){
    document.querySelector('.header').classList.remove('main-blue');
    document.querySelector('.header').classList.remove('main-green');
    document.querySelector('.header').classList.remove('main-purple');

    document.querySelector('.header__frame').classList.remove('sec-blue');
    document.querySelector('.header__frame').classList.remove('sec-green');
    document.querySelector('.header__frame').classList.remove('sec-purple');

    document.querySelector('.container__nav').classList.remove('main-blue');
    document.querySelector('.container__nav').classList.remove('main-green');
    document.querySelector('.container__nav').classList.remove('main-purple');

    document.querySelector('.header').classList.add('main-blue');

    document.querySelector('.header__frame').classList.add('sec-blue');

    document.querySelector('.container__nav').classList.add('main-blue');
});

document.getElementById("purple").addEventListener('click', function(){
    document.querySelector('.header').classList.remove('main-blue');
    document.querySelector('.header').classList.remove('main-green');
    document.querySelector('.header').classList.remove('main-purple');

    document.querySelector('.header__frame').classList.remove('sec-blue');
    document.querySelector('.header__frame').classList.remove('sec-green');
    document.querySelector('.header__frame').classList.remove('sec-purple');

    document.querySelector('.container__nav').classList.remove('main-blue');
    document.querySelector('.container__nav').classList.remove('main-green');
    document.querySelector('.container__nav').classList.remove('main-purple');

    document.querySelector('.header').classList.add('main-purple');

    document.querySelector('.header__frame').classList.add('sec-purple');

    document.querySelector('.container__nav').classList.add('main-purple');
});