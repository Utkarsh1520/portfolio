const menu = document.getElementById('menu');
const items = document.getElementById('navOptions');

function openMenu(){
    items.style.display='flex';
    console.log('suc'/n);
}

menu.addEventListener('click', openMenu);