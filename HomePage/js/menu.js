// src="https://unpkg.com/vue@3/dist/vue.global.js";

const sidebar = document.getElementById('side-bar');
const sidebarContent = document.getElementById('side-bar-flex');
const sidebarContentinto = document.getElementById('member-flex');

const menu = document.getElementById('menu');
const popupMenu = document.getElementById('popup-menu');

sidebarOpen = false;
closeSidebar();

function closeSidebar(event) {

    sidebar.style.padding = "0px";
    // sidebar.style.opacity = '0.8';
    sidebar.style.height = "50px";

    sidebarContent.style.visibility = 'hidden';
    sidebarContent.style.opacity = '0.2';
    sidebarOpen = false;
}

function openSidebar(event) {

    sidebar.style.padding = "10px 20px";
    // sidebar.style.opacity = '1';
    sidebar.style.height = "max-content";
    // sidebar.style.zIndex = "1";

    sidebarContent.style.visibility = 'visible';
    sidebarContent.style.opacity = '1';
    sidebarOpen = true;

}


function toggleSidebar(event) {
    if (sidebarOpen) {
        closeSidebar();
        
    } else {
        openSidebar();
        
    }
}

sidebar.addEventListener('mouseenter', function() {
    openSidebar();
});

sidebar.addEventListener('mouseleave', function() {
    closeSidebar();
});

menu.addEventListener('mouseenter', function() {
    popupMenu.style.display = 'flex';
});

popupMenu.addEventListener('mouseleave', function() {
    popupMenu.style.display = 'none';
});


sidebar.addEventListener('touchstart', function() {
    toggleSidebar();
});

