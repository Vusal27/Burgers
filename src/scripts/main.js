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

function accordionMenu() {
    const menus = document.querySelectorAll(".menu__item");
    const menuAccord = document.querySelector(".menu__list");

    menuAccord.addEventListener("click", event => {
        let target = event.target.parentNode;
        let menuit = target.parentNode;
        let content = target.nextElementSibling;

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
                }
            }

            if (menuit.classList.contains("menu__item--active")) {
                menuit.classList.remove("menu__item--active");
            } else {
                menuit.classList.add("menu__item--active");
            }
        }
    });
}
accordionMenu()



const left = document.querySelector(".slider__arrowprew");
const right = document.querySelector(".slider__arrownext");
const list = document.querySelector(".slider__list");

const minRight = 0;
const maxRight = 3504;
const step = 876;
let currentRight = 0;

list.style.right = currentRight;

right.addEventListener("click", function() {
    if (currentRight < maxRight) {
        currentRight += step;
        list.style.right = currentRight + "px";
    }
});
left.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        list.style.right = currentRight + "px";
    }
});



const openButton = document.querySelectorAll("button.button--comments");
const successOverlay = openOverlay("Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть.Никогда не думал что булочки могут быть такими мягкими,котлета такой сочной,а сыр таким расплавленным.Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть.Никогда не думал что булочки могут быть такими мягкими,котлета такой сочной,а сыр таким расплавленным.");

for (var button of openButton) {
	button.addEventListener('click', function() {
        document.body.appendChild(successOverlay);
    });
}
function openOverlay(content) {
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
  titleElement.textContent = "константин спилберг";

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