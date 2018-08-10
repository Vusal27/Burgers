var navburlink = document.querySelector('.nav__burger-link');
var navadapt = document.querySelector('.navadapt');
navburlink.addEventListener('click', function() {
    navburlink.classList.toggle("nav__burger-link--active");
    navadapt.classList.toggle("navadapt_active");
});



var navadaptlink = document.querySelectorAll ("a.navadapt__link");
for (var i=0; i<navadaptlink.length; i++){
	navadaptlink[i].onclick = function() {
        navburlink.classList.toggle("nav__burger-link--active");
        navadapt.classList.toggle("navadapt_active");
    };
};