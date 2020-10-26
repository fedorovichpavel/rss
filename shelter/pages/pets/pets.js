const burger = document.querySelector('.burger'),
    list = document.querySelector('.list2'),
    popup__burger = document.querySelector('.popup__burger');


burger.addEventListener('click', burDis);
popup__burger.addEventListener('click', function bR() {
    list.style.right = "-100%";
    burger.style.transform = 'none';
    popup__burger.style.opacity = '0';
    popup__burger.style.zIndex = '-2';
});

list.style.right = "-100%";
popup__burger.style.opacity = '0';

function burDis() {
    if (list.style.right === "-100%") {
        list.style.right = "0";
        burger.style.transform = 'rotate(90deg)';
        popup__burger.style.opacity = '1';
        popup__burger.style.zIndex = '0';
        burger.src = '../../assets/Burger.svg';
    } else if (list.style.right === "0px") {
        list.style.right = "-100%";
        burger.style.transform = 'none';
        popup__burger.style.opacity = '0';
        popup__burger.style.zIndex = '-2';
        burger.src = '../../assets/Burger1.svg';
    }

}