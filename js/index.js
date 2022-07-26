const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const moreInfoBtn = document.querySelector('.more-info');
const lessInfoBtn = document.querySelector('.less-info');
const aboutText = document.querySelectorAll('.section-text-about');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

function infoBtnClick(){
    if(moreInfoBtn.innerText ==='More Info'){
        moreInfoBtn.style.display = 'none';
        aboutText.forEach(x => x.style.display = 'grid');
        lessInfoBtn.style.display = 'grid';
    } else if(lessInfoBtn.innerText === 'Less Info' && moreInfoBtn.style.display === 'none'){
        lessInfoBtn.style.display = 'none';
        aboutText.forEach(x => x.style.display ='none');
        moreInfoBtn.style.display ='grid';
    }
}