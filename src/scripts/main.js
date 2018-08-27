var navburlink = document.querySelector('.nav__burger-link');
var navadapt = document.querySelector('.navadapt');
navburlink.addEventListener('click', toggleClass);

var navadaptlink = document.querySelectorAll ("a.navadapt__link");
for (var link of navadaptlink){
	link.addEventListener('click', toggleClass);
}
function toggleClass() {
    navburlink.classList.toggle("nav__burger-link--active");
    navadapt.classList.toggle("navadapt_active");
}
////////////


function accordionTeam() {
    const workers = document.querySelectorAll(".team__item");
    const teamAccord = document.querySelector(".team__list");

    teamAccord.addEventListener("click", event => {
        const target = event.target;

        if (target.classList.contains("team__link")) {
            const worker = target.parentNode;
            const content = target.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

            for (const iterator of workers) {
                if (iterator !== worker) {
                    iterator.classList.remove("team__item--active");
                    iterator.lastElementChild.style.height = 0;
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
accordionTeam()
////////////
function accordionMenu() {
    const menus = document.querySelectorAll(".menu__item");
    const menuAccord = document.querySelector(".menu__list");

    menuAccord.addEventListener("click", event => {
        let target = event.target.parentNode;
        let menuit = target.parentNode;
        let content = target.nextElementSibling;

        const tarWidth = target.clientWidth;
        const windowWidth = document.documentElement.clientWidth;
        const layoutContentWidth = 480;
        const breakpointPhone = 480;
        const closeMenuWidth = tarWidth * menus.length;
        const openMenuWidth = closeMenuWidth + layoutContentWidth;

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
            
            for (const iterator of menus) {
                if (iterator !== menuit) {
                    iterator.classList.remove("menu__item--active");
                    iterator.lastElementChild.style.width = 0;
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
                    let num

                    for (let i = 0; i < menus.length; i++) {

                        if(menus[i] === menuit) {
                            num = menus.length - (i + 1)
                        }
                    }

                    menuAccord.style.transform = `translateX(${tarWidth * num}px)`;
                    content.style.width = windowWidth - tarWidth + 'px';
                } else {
                    content.style.width = layoutContentWidth + 'px';
                }  
            }
        }
    });
}
accordionMenu()
////////////

const list = document.querySelector(".slider__list");
const widthContainer = document.querySelector('.slider__wrap').clientWidth;
const controls = document.querySelector('.slider__arrows');
var pos = 0;

function calcWidthList() {
    const itemCount = list.children.length;
    const widthList = itemCount * widthContainer;

    list.style.width = `${widthList}px`;
    console.log(widthList);
}

function handlerClick(event) {
    if (event.target.tagName === 'BUTTON') {
        slide(event.target);
    }
}

function slide(target) {
    const vector = target.dataset.vector;

    switch (vector) {
        case 'next':
            slideTo(vector);
            break;
        case 'prev':
            slideTo(vector);
            break;
    }
}

function slideTo(vector) {
    const active = document.querySelector('.active');
    if (vector === 'next') {
        var nextElement = active.nextElementSibling;
    } else {
        var prevElement = active.previousElementSibling;
    }

    if (nextElement) {
        pos -= widthContainer;
        active.classList.remove('active');
        nextElement.classList.add('active');
        translate(pos);
    } else if (prevElement) {
        pos += widthContainer;
        active.classList.remove('active');
        prevElement.classList.add('active');
        translate(pos);
    }
}

function translate(pos) {
    list.style.transform = `translateX(${pos}px)`;
}

controls.addEventListener('click', handlerClick);
window.addEventListener('load', calcWidthList);
////////////

// const left = document.querySelector(".slider__arrowprew");
// const right = document.querySelector(".slider__arrownext");
// const list = document.querySelector(".slider__list");
// const wrap = document.querySelector(".slider__wrap");

// const minRight = 0;
// const step = wrap.clientWidth;
// const maxRight = list.clientWidth -= step;
// let currentRight = 0;

// list.style.right = currentRight;

// right.addEventListener("click", function() {
//     if (currentRight < maxRight) {
//         currentRight += step;
//         list.style.right = currentRight + "px";
//     }
// });
// left.addEventListener("click", function() {
//     if (currentRight > minRight) {
//         currentRight -= step;
//         list.style.right = currentRight + "px";
//     }
// });
////////////

function openReviews() {
    const openButton = document.querySelectorAll(".button--comments");
    for (var button of openButton) {
        button.addEventListener('click', function(e) {
            let content = e.target.previousElementSibling.textContent;
            let title = e.target.previousElementSibling.previousElementSibling.textContent;
            if (e.target.classList.contains("button--desctop")) {
                document.body.appendChild(openOverlay(content, title));
            } else {
                content = e.target.previousElementSibling.previousElementSibling.textContent;
                title = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
                document.body.appendChild(openOverlay(content, title));
            }
        });
    }
}
openReviews()
////
function openOverlay(content, title) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
    closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlaycontainer");

  const contentElement = document.createElement("div");
  contentElement.classList.add("overlaycontent");
  contentElement.innerHTML = content;

  const titleElement = document.createElement("h3");
  titleElement.classList.add("comments__overlaytitle");
  titleElement.textContent = title;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(titleElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}
////////////


const myForm = document.querySelector('.form');
const send = document.querySelector('.send');
send.addEventListener('click', event => {
    event.preventDefault();
    
    if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: "mail@mail.ru"
        };
        console.log(data);
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        console.log(JSON.stringify(data));
        
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            console.log(xhr.response);
            
            if (xhr.response.status === 200) {
                console.log(xhr.response);
                document.body.appendChild(openOverlayForm('Отправлено'));
            } else {
                console.log(xhr.response.status);
                document.body.appendChild(openOverlayForm(xhr.response.message));
            }
        });
        //document.body.appendChild(openOverlayForm('xhr.response'));
    }
});
function openOverlayForm(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("over-lay");
    overlayElement.addEventListener("click", e => {
        if (e.target === overlayElement) {
        closeElement.click();
        }
    });

    const containerElement = document.createElement("div");
    containerElement.classList.add("overlay-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("overlay-content");
    contentElement.innerHTML = content;

    const closeElement = document.createElement("button");
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
    let valid = true;

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
 ////////////

 // function initMap() {
//   var uluru = {lat: 59.907, lng: 30.246};
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 12, center: uluru});
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

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
////////////

(function () {
    const container = document.querySelector('.main-content');
    const nav = document.querySelector('.switcher');
    const down = document.querySelector('.hero__down');
    const menu = document.querySelector('.nav__list');
    const orderButton = document.querySelector('.button_color-orange');
    const orderButtonHeader = document.querySelector('.button_header');
    const tabletMenu = document.querySelector('.navadapt__list');

    const duration = 1500;
    let posY = 0;
    let isAmimate = false


    window.addEventListener('wheel', handlerWheel);
    nav.addEventListener('click', handlerClick);
    menu.addEventListener('click', menuHandlerClick);
    tabletMenu.addEventListener('click', tabletMenuHandlerClick);
    down.addEventListener('click', downHandlerClick);
    orderButton.addEventListener('click', buttonHandlerClick);
    orderButtonHeader.addEventListener('click', buttonHeaderHandlerClick);

    function buttonHeaderHandlerClick(e) {
        e.preventDefault();

        if (e.target.tagName === 'A') {
            const index = e.target.getAttribute('href');
            const [active, activenav,  activebuttonHeader] = getActives();

            reActive(false, active, 'section', null, index);
            reActive(false, activenav, 'switcher__item', null, index);
            reActive(false, activebuttonHeader, 'button_header', null, index);
            
            posY = index;
            translate(posY);
        }
    }

    function buttonHandlerClick(e) {
        e.preventDefault();
        console.log(1);

        if (e.target.tagName === 'A') {
            console.log(2);
            const index = e.target.getAttribute('href');
            const [active, activenav,  activebutton] = getActives();

            reActive(false, active, 'section', null, index);
            reActive(false, activenav, 'switcher__item', null, index);
            reActive(false, activebutton, 'button_color-orange', null, index);
            
            posY = index;
            translate(posY);
        }
    }
    
    function downHandlerClick(e) {
        e.preventDefault();

        if (e.target.parentNode.tagName === "A") {
            
            const index = e.target.parentNode.getAttribute('href');
            const [active, activenav, activedown] = getActives();

            reActive(false, active, 'section', null, index);
            reActive(false, activenav, 'switcher__item', null, index);
            reActive(false, activedown, 'herodown', null, index);
            
            posY = index;
            translate(posY);
        }
    }

    function tabletMenuHandlerClick(e) {
        e.preventDefault();

        if (e.target.tagName === 'A') {
            
            const index = e.target.getAttribute('href');
            const [active, activenav, activemenu, activetabletMenu] = getActives();

            reActive(false, active, 'section', null, index);
            reActive(false, activenav, 'switcher__item', null, index);
            reActive(false, activemenu, 'nav__item', null, index);
            reActive(false, activetabletMenu, 'navadapt__item', null, index);
            
            posY = index;
            translate(posY);
        }
    }

    function menuHandlerClick(e) {
        e.preventDefault();

        if (e.target.tagName === 'A') {
            
            const index = e.target.getAttribute('href');
            const [active, activenav, activemenu] = getActives();

            reActive(false, active, 'section', null, index);
            reActive(false, activenav, 'switcher__item', null, index);
            reActive(false, activemenu, 'nav__item', null, index);
            
            posY = index;
            translate(posY);
        }
    }
    
    function handlerClick(e) {
        e.preventDefault();

        if (e.target.tagName === 'A') {
            const index = e.target.getAttribute('href');
            const [active, activenav, activemenu] = getActives();

            reActive(false, active, 'section', null, index);
            reActive(false, activenav, 'switcher__item', null, index);
            reActive(false, activemenu, 'nav__item', null, index);
            
            posY = index;
            translate(posY);
        }
    }
    function handlerWheel(e) {
        console.log(e.deltaY);
        if (isAmimate) return;
        if (e.deltaY > 0) {
            const isNext = isSlide('next');
            slideTo(isNext, 'next');
        } else {
            const isPrev = isSlide('previous');
            slideTo(isPrev, 'prev');
        }
    }
    function slideTo(resolve, vector) {
        if (vector === 'next' && resolve) {
            posY++;
            translate(posY);
        }
        if (vector === 'prev' && resolve) {
            posY--;
            translate(posY);
        }
    }
    function translate(pos) {
        container.style.transform = `translate3d(0, ${-pos * 100}%,0)`;
        container.style.transition = `all ${duration}ms ease 0s`;
        isAmimate = true
        setTimeout(() => {
            isAmimate = false;
        }, duration)
    }
    function isSlide(vector) {
        const [active, activenav] = getActives()

        if (active[`${vector}ElementSibling`]) {
            reActive(true, active, 'section', vector);
            reActive(true, activenav, 'switcher__item', vector);
            return true
        }
    }
    function reActive(isSibling, elem, _class, vector, index) {
        if (isSibling) {
            elem.classList.remove(`${_class}_active`);
            elem[`${vector}ElementSibling`].classList.add(`${_class}_active`);
        } else {
            elem.classList.remove(`${_class}_active`);
            document.querySelectorAll(`.${_class}`)[index]
            elem.classList.add(`${_class}_active`);
            console.log(elem);
            
            console.log(document.querySelectorAll(`.${_class}`)[index])
        }
    }
    function getActives() {
        const active = document.querySelector('.section_active');
        const activenav = document.querySelector('.switcher__item_active');
        const activemenu = document.querySelector('.nav__item_active');
        const activetabletMenu = document.querySelector('.navadapt__item_active');
        const activedown = document.querySelector('.herodown_active');
        const activebutton = document.querySelector('.button_color-orange_active');
        const activebuttonHeader = document.querySelector('.button_header_active');
        return [active, activenav, activemenu, activetabletMenu, activedown, activebutton, activebuttonHeader];
    }
})();
////////////

let player;
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
        // events: {
        //     onReady: onPlayerReady,
        //     onStateChange: onPlayerStateChange
        // }
    });
}
const playerStart = document.querySelector('.player__start');
$('.player__start').on("click", e => {
    e .preventDefault()
    const block = $(e.currentTarget);
    const playerStatus = player.getPlayerState();

    if (playerStatus !== 1) {
        player.playVideo();
        // block.text('||');
    } else {
        player.pauseVideo();
        // block.html();
    }
    
});