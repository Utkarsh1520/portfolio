const menu = document.getElementById('navigationOptions');
const menuActionOption =  document.getElementById('menuIcon');
const closeMenuAction = document.getElementById('closeIcon');

function displaySideDrawer(){
    console.log('suc');
    menu.style.display='flex';
}

function closeSideDrawer(){
    menu.style.display='none';
}

// menuActionOption.addEventListener('onclick',displaySideDrawer());