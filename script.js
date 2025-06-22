let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

if(menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
    }

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove ('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add
                ('active')
            })
        }
    })
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelectorAll('.grid-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.src = this.getAttribute('data-hover');
    });
    img.addEventListener('mouseout', function() {
        this.src = this.getAttribute('data-static');
    });
});

