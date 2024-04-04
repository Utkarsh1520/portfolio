const menu = document.getElementById('menu');
const items = document.getElementById('navOptions');

function openMenu(){
    items.style.display='flex';
}

menu.addEventListener('click', openMenu);