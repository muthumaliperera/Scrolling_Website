let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let sec = document.querySelector('.sec'); // Get the .sec section element

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let secHeight = sec.offsetHeight; // Get the height of the .sec section
    let windowHeight = window.innerHeight; // Get the window height

    // Calculate the maximum scroll position based on the .sec section height and window height
    let maxScroll = secHeight - windowHeight;

    // Ensure the scroll position does not exceed the maximum
    if (value <= maxScroll) {
        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }
});
