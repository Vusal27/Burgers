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
console.log(target);

        if (event.target.classList.contains("menu__title")) {
            name()
        }
        target = event.target;
        menuit = target.parentNode;
        content = target.nextElementSibling;
        console.log(target);
        
        if (target.classList.contains("menu__link")) {
            name()
        }
        function name() {
            console.log(1);
            
            for (const iterator of menus) {
                if (iterator !== menuit) {
                    iterator.classList.remove("menu__item--active");
                    //iterator.lastElementChild.style.height = 0;
                }
            }

            if (menuit.classList.contains("menu__item--active")) {
                menuit.classList.remove("menu__item--active");
                //content.style.height = 0;
            } else {
                menuit.classList.add("menu__item--active");
                //content.style.height = contentHeight + "px";
            }
        }
    });
}
accordionMenu()