(function () {
    const tryItFree = document.querySelector('.main-button');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close__btn');
    const modalBg = document.querySelector('.modal-bg');
    const body = document.getElementsByTagName('body');
    tryItFree.addEventListener('click', () => {
        modal.classList.add('active');
        modalBg.classList.add('active-bg');
    })
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        modalBg.classList.remove('active-bg');
    })
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-bg')) {
            modal.classList.remove('active');
            modalBg.classList.remove('active-bg');
        }
    })
    document.addEventListener('keydown', (e) => {
        if( e.keyCode == 27 ){
            modal.classList.remove('active');
            modalBg.classList.remove('active-bg');
        }
    });
}());