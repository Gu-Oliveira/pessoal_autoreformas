function openMenu(){
    let menuOpened = document.querySelector('nav');

    if(menuOpened.style.width == '0px'){
        menuOpened.style.width = '200px';
    }else{
        menuOpened.style.width = '0px'
    }

};

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

