ScrollReveal().reveal('.mi', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: true,
});
ScrollReveal().reveal('.mi', {
    Origin: 'bottom',      // where it comes from: top, bottom, left, right
    Distance: '50px',      // how far it travels
    Duration: 1000,        // how long animation takes (ms)
    Delay: 200,            // wait before starting (ms)
    Opacity: 0,            // starting opacity (0 = invisible)
    Scale: 0.85,           // starting size (0.85 = slightly small)
    Easing: 'ease-in-out', // animation style: ease, linear, ease-in, ease-out
    Reset: true,           // animate every time it enters screen
    Interval: 200,         // delay between each item if multiple elements
    viewFactor: 0.2,       // how much of element must be visible to trigger (0 to 1)
});
// ✅ comma separated inside one string
ScrollReveal().reveal('.mi', {
    Delay: 200,
    Distance: '50px',
    Origin: 'bottom',
    Duration: 1000,
});
