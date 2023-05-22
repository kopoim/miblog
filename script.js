const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn= document.querySelector('#close_nav-btn');


// open nav menu
const openNav = () =>{
    navItems.style.display = 'flex';

    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () =>{
    navItems.style.display = 'none';

    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


const sidebar = document.querySelector('aside');
const ShowsidebarBtn = document.querySelector('#show_sidebar-btn');
const HidesidebarBtn = document.querySelector('#hide_sidebar-btn');



// open nav menu
const showSidebar = () =>{
    sidebar.style.left = '0';

    ShowsidebarBtn.style.display = 'none';
    HidesidebarBtn.style.display = 'inline-block';
}

const hideSidebar = () =>{
    sidebar.style.left = '-100%';

    ShowsidebarBtn.style.display = 'inline-block';
    HidesidebarBtn.style.display = 'none';
}

ShowsidebarBtn.addEventListener('click', showSidebar);
HidesidebarBtn.addEventListener('click', hideSidebar);