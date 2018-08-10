var navburlink = document.querySelector('.nav__burger-link');
var navadapt = document.querySelector('.navadapt');
var navburlinkactive = document.querySelector('.nav__burger-link--active');
var navadaptlink = document.querySelector('.navadapt__link');

navburlink.addEventListener('click', function() {
    navburlink.classList.add("nav__burger-link--active");
    navadapt.style.display = 'flex';
})
//navadaptlinkactive.addEventListener('click', function() {
//    navburlink.classList.remove("nav__burger-link--active");
//    navadapt.style.display = 'none';
//})
navadaptlink.addEventListener('click', function() {
    navburlink.classList.remove("nav__burger-link--active");
    navadapt.style.display = 'none';
})

//if (navburlink.classList === "nav__burger-link--active") {
//    navburlink.classList.remove("nav__burger-link--active");
//    navadapt.style.display = 'flex';
//}else{navburlink.classList += "nav__burger-link--active";
//navadapt.style.display = 'flex';
//    }
//})

/*function myfunction () {
    var x = document.getElementsByClassName("navadapt-link");
    if (x.className === "nav__burger-link--active") {
        x.className -= " nav__burger-link--active";
    }else{x.className += " nav__burger-link--active";
    }
}*/