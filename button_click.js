
const div1 = document.querySelector (`.menu`);
const div2 = document.querySelector (`.container1`);


div1.addEventListener('click', function () {
    div2.classList.toggle (`active`);
});



// animations
let sections = document.querySelectorAll ('.section');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;

        if (top >= offset && top <offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}
// animations

