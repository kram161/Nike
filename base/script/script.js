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
