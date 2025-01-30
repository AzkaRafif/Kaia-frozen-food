var xstatus = true;
var nb = false;

const tombol = document.getElementById('tombol');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

tombol.addEventListener('click', () => {
    if (xstatus) {
        navbar.classList.add("bg-black");
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        xstatus = false;      
    } else {
        if(nb == false){
            navbar.classList.remove
            ("bg-black")
        }
        navbar.classList.remove("bg-black");
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        xstatus = true;      
        
    }
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-black");
        nb = false;
    } else {
        if (xstatus != false)
        navbar.classList.remove("shadow-lg", "bg-black");
        nb = false;
    }
})