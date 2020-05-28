//ste script activa el auto init el cual nos da acceso a unas animaciones de javascript.
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});

//Este es para la activacion del parallax en el inicio y en las diferentes paginas y haga el menu responsivo
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

//Codigo de animaciones en el menu
anime({
    targets: '.brand-logo',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1000
});
anime({
    targets: '.a1',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1100
});
anime({
    targets: '.a2',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1200
});
anime({
    targets: '.a3',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1300
});
anime({
    targets: '.a4',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1400
});
anime({
    targets: '.a5',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1500
});
anime({
    targets: '.a6',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1600
});
anime({
    targets: '.modal-trigger',
    translateY: 100,
    direction: 'alternate',
    easing: 'linear',
    delay: 1700
});