
let navItems = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItems.length; i++) {
navItems[i].addEventListener('mouseover', function () {
    this.style.fontSize = '20px';
})
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseout', function () {
        this.style.fontSize = '16px';
    })
    }