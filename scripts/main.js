// Слайдер
var slider = document.querySelector('.slider__list');
var sliderPos = 0;
function sliderToLeftX() {
    if (sliderPos !== (0)) {
        sliderPos += 80;
        slider.style.transform='translateX(' + sliderPos + 'vw)';
    }
}
function sliderToRightX() {
    if (sliderPos !== (-320)) {
        sliderPos -= 80;
        slider.style.transform='translateX(' + sliderPos + 'vw)';
    }
}

// Навигация по hash
var switcher = document.querySelectorAll(".switcher__item");
var screen = 0;

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2000, function(){

        window.location.hash = hash;
        });
        
        for (i=0;i<switcher.length;i++) {
            var switcherAttr = switcher[i].firstElementChild.getAttribute('href');
            if (this.hash === switcherAttr) {
                screen = switcherAttr[1];
                switcher[i].classList.add('switcher__item_active');
            } else {
                switcher[i].classList.remove('switcher__item_active');
            }
        }
    }
});

// onePageScroll
window.addEventListener('wheel', handlerWheel);
var isAnimate = false;
function handlerWheel(e) {
    if (!isAnimate) {
        isAnimate = true;
        if (e.deltaY > 0 && screen < 8) {
            screen++;  
            changeSwitcher();
        }
        if (e.deltaY < 0 && screen > 0) {
            screen--;
            changeSwitcher();
        }
    }
    setTimeout(function() {
        isAnimate = false;
    }, 1500);
}

function changeSwitcher() {
    for (var i=0;i<switcher.length;i++) {
        switcher[i].classList.remove('switcher__item_active');
        if ('#' + screen === switcher[i].firstElementChild.getAttribute('href')) {
            switcher[i].firstElementChild.click();
            switcher[i].classList.add('switcher__item_active');
        }
    }
}

window.addEventListener('keyup', handlerKey);

function handlerKey(e) {
    if (!isAnimate) {
        isAnimate = true;
        if (e.keyCode === 40 && screen < 8) {
            screen++;  
            changeSwitcher();
        }
        if (e.keyCode === 38 && screen > 0) {
            screen--;
            changeSwitcher();
        }
    }
    setTimeout(function() {
        isAnimate = false;
    }, 1500);
}

// Бургер меню //
var navburlink = document.querySelector('.nav__burger-link');
var navadapt = document.querySelector('.navadapt');
navburlink.addEventListener('click', toggleClass);
  
var navadaptlink = document.querySelectorAll(".navadapt__link");
for (var i=0;i<navadaptlink.length;i++) {
    navadaptlink[i].addEventListener('click', toggleClass);
}
function toggleClass() {
    event.preventDefault();
    navburlink.classList.toggle("nav__burger-link--active");
    navadapt.classList.toggle("navadapt_active");
    
}

// Popup в секции отзывы //
function openReviews() {
    var openButton = document.querySelectorAll(".button--comments");
    for (var i=0;i<openButton.length;i++) {
        openButton[i].addEventListener('click', function(event) {
            var content = event.target.previousElementSibling.textContent;
            var title = event.target.previousElementSibling.previousElementSibling.textContent;
            if (event.target.classList.contains("button--desctop")) {
                document.body.appendChild(openOverlay(content, title));
            } else {
                content = event.target.previousElementSibling.previousElementSibling.textContent;
                title = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
                document.body.appendChild(openOverlay(content, title));
            }
        });
    }
}
openReviews()
////
function openOverlay(content, title) {
  var overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
    closeElement.click();
    }
  });

  var containerElement = document.createElement("div");
  containerElement.classList.add("overlaycontainer");

  var contentElement = document.createElement("div");
  contentElement.classList.add("overlaycontent");
  contentElement.innerHTML = content;

  var titleElement = document.createElement("h3");
  titleElement.classList.add("comments__overlaytitle");
  titleElement.textContent = title;

  var closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
      event.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(titleElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}


// Секция форма //
var myForm = document.querySelector('.form');
var send = document.querySelector('.send');
send.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (validateForm(myForm)) {
        myForm.elements.name.value = '';
        myForm.elements.phone.value = '';
        myForm.elements.comment.value = '';
        myForm.elements.street.value = '';
        myForm.elements.house.value = '';
        myForm.elements.building.value = '';
        myForm.elements.apartment.value = '';
        myForm.elements.floor.value = '';
        var data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: "mail@mail.ru"
        };
        
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'url');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', function() {
            
            if (xhr.status === 200) {
                document.body.appendChild(openOverlayForm(xhr.message));
            } else {
                document.body.appendChild(openOverlayForm(xhr.message));
            }
        });
    }
});
function openOverlayForm(content) {
    var overlayElement = document.createElement("div");
    overlayElement.classList.add("over-lay");
    overlayElement.addEventListener("click", function(e) {
        if (e.target === overlayElement) {
        closeElement.click();
        }
    });

    var containerElement = document.createElement("div");
    containerElement.classList.add("overlay-container");

    var contentElement = document.createElement("div");
    contentElement.classList.add("overlay-content");
    contentElement.innerHTML = content;

    var closeElement = document.createElement("button");
    closeElement.classList.add("button_close");
    closeElement.textContent = "закрыть";
    closeElement.addEventListener("click", function() {
        document.body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(contentElement);
    containerElement.appendChild(closeElement);

    return overlayElement;
}

function validateForm(form) {
    var valid = true;

    if (!validateformblock(form.elements.name)) {
        valid = false;
    }
    if (!validateformblock(form.elements.phone)) {
    valid = false;
    }
    if (!validateformblock(form.elements.comment)) {
    valid = false;
    }
    return valid;
}

 function validateformblock(formblock) {
        formblock.nextElementSibling.textContent = formblock.validationMessage;
        return formblock.checkValidity();
 }

 // Аккордион секция команда //
function accordionTeam() {
    var workers = document.querySelectorAll(".team__item");
    var teamAccord = document.querySelector(".team__list");

    teamAccord.addEventListener("click", function(event) {
        event.preventDefault();
        var target = event.target;

        if (target.classList.contains("team__link")) {
            var worker = target.parentNode;
            var content = target.nextElementSibling;
            var contentHeight = content.firstElementChild.clientHeight;

            for (var i=0;i<workers.length;i++) {
                if (workers[i] !== worker) {
                    workers[i].classList.remove("team__item--active");
                    workers[i].lastElementChild.style.height = 0;
                }
            }

            if (worker.classList.contains("team__item--active")) {
                worker.classList.remove("team__item--active");
                content.style.height = 0;
            } else {
                worker.classList.add("team__item--active");
                content.style.height = contentHeight + "px";
            }
        }
    });
}
accordionTeam();

// Аккордион секция меню //
function accordionMenu() {
    var menus = document.querySelectorAll(".menu__item");
    var menuAccord = document.querySelector(".menu__list");

    menuAccord.addEventListener("click", function(event) {
        event.preventDefault();
        var target = event.target.parentNode;
        var menuit = target.parentNode;
        var content = target.nextElementSibling;

        var tarWidth = target.clientWidth;
        var windowWidth = document.documentElement.clientWidth;
        var layoutContentWidth = 480;
        var breakpointPhone = 480;
        var closeMenuWidth = tarWidth * menus.length;
        var openMenuWidth = closeMenuWidth + layoutContentWidth;

        if (event.target.classList.contains("menu__title")) {
            name()
        }
        target = event.target;
        menuit = target.parentNode;
        content = target.nextElementSibling;
        
        if (target.classList.contains("menu__link")) {
            name()
        }
        function name() {
            
            for (var i=0;i<menus.length;i++) {
                if (menus[i] !== menuit) {
                    menus[i].classList.remove("menu__item--active");
                    menus[i].lastElementChild.style.width = 0;
                    menuAccord.style.transform = 'translateX(0)';
                }
            }

            if (menuit.classList.contains("menu__item--active")) {
                menuit.classList.remove("menu__item--active");
                content.style.width = 0;
            } else {
                menuit.classList.add("menu__item--active");
                
                if (windowWidth > breakpointPhone && windowWidth < openMenuWidth) {
                    content.style.width = windowWidth - closeMenuWidth + 'px';
                } else if (windowWidth <= breakpointPhone) {
                    var num

                    for (var i = 0; i < menus.length; i++) {

                        if(menus[i] === menuit) {
                            num = menus.length - (i + 1)
                        }
                    }

                    menuAccord.style.transform = 'translateX(' + (tarWidth * num)+'px)';
                    content.style.width = windowWidth - tarWidth + 'px';
                } else {
                    content.style.width = layoutContentWidth + 'px';
                }  
            }
        }
    });
}
accordionMenu();

// API Youtube Player //
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("ytplayer", {
        width: "660",
        height: "405",
        videoId: "zmg_jOwa9Fc",
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        },
        events: {
            onReady: onPlayerReady,
        }
    });
}

function onPlayerReady() {
    var duration = player.getDuration();
    var interval;

    clearInterval(interval);
    interval = setInterval(function() {
        var completed = player.getCurrentTime();
        var percents = (completed / duration) * 100;

        changeButtonPosition(percents);
    }, 1000);
}

var playerStart = document.querySelector('.player__start');
$('.player__start').on("click", function(e) {
    e.preventDefault()
    var block = $(e.currentTarget);
    var playerStatus = player.getPlayerState();

    if (playerStatus !== 1) {
        player.playVideo();
        $('.player__splash').addClass('none');
        $('.player__start').addClass('paused');
    } else {
        player.pauseVideo();
        $('.player__splash').removeClass('none');
        $('.player__start').removeClass('paused');
    } 
});

$('.player__splash').on("click", function(e) {
    e .preventDefault()
    $('.player__splash').addClass('none');
    $('.player__start').addClass('paused');
    player.playVideo();
});

$('.player__playback').on('click', function(e) {
    e.preventDefault()

    var bar = $(e.currentTarget);

    var newButtonPosition = e.pageX - bar.offset().left;
    var clickedPercents = (newButtonPosition / bar.width()) * 100;
    var newPlayerTime = (player.getDuration() / 100) * clickedPercents;

    player.seekTo(newPlayerTime);
    changeButtonPosition(percents);

})

$('.player__volume-line').on('click', function(e) {
    e.preventDefault()

    var volume = 100;
    var volumeLine = $(e.currentTarget);

    var newVolumePosition = e.pageX - volumeLine.offset().left;
    var clickedVolumePercents = (newVolumePosition / volumeLine.width()) * 100;
    var newVolume = (volume / 100) * clickedVolumePercents;

    player.setVolume(newVolume);
    changeVolumePosition(newVolume);

})

function changeButtonPosition(percents) {
    $('.player__playback-button').css({
        left: percents + '%'
    });
}

function changeVolumePosition(newVolume) {
    $('.player__volume-button').css({
        left: newVolume + '%'
    });
}

// API яндекс карта //
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map',{
        center: [59.92, 30.32],
        zoom:12,
        controls:['zoomControl'],
        behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([59.97, 30.31] , {
        hintContent: 'BurgerShop'
        } , {
        iconImageHref: 'images/svgicons/marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
        iconLayout: 'default#image'
    });
    var placemark2 = new ymaps.Placemark([59.94, 30.38] , {
        hintContent: 'BurgerShop'
        } , {
        iconLayout: 'default#image',
        iconImageHref: 'images/svgicons/marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });
    var placemark3 = new ymaps.Placemark([59.88, 30.31] , {
        hintContent: 'BurgerShop'
        } , {
        iconLayout: 'default#image',
        iconImageHref: 'images/svgicons/marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });
    var placemark4 = new ymaps.Placemark([59.91, 30.49] , {
        hintContent: 'BurgerShop'
        } , {
        iconLayout: 'default#image',
        iconImageHref: 'images/svgicons/marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });
    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(placemark4);
}