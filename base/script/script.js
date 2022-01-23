const button = document.querySelectorAll('.button');
for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click',() =>{
        button[i].style.boxShadow = 'none';
    })
}

const dropdown = document.querySelectorAll('.dropdown-menu__select')
const dropdownList = document.querySelectorAll('.dropdown-menu__list')
for (let i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener('click',() =>{
        dropdownList[i].classList.toggle('dropdown-menu__list-active')
    })
}

const scroller = document.getElementById('preview-scroller');
const header = document.getElementById('header');
scroller.addEventListener('click',() =>{
    header.scrollIntoView({behavior:"smooth"});
})



const burgerActivator = document.querySelector('.header-mobile__burger')
const headerMenuList = document.querySelector('.header-mobile__list')
const burgerDeactivator = document.querySelector('.header-mobile__list__button')
burgerActivator.addEventListener('click', () =>{
    headerMenuList.classList.add('header-mobile__list-active')
})
burgerDeactivator.addEventListener('click', () =>{
    headerMenuList.classList.remove('header-mobile__list-active')
})