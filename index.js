var toggleBtn = document.querySelectorAll(".toggleButton");
const theme = document.getElementById("theme");
const logo = document.querySelector(".logo")
const logoMob = document.querySelector(".mobileLogo ")
const arrows = document.querySelectorAll(".arrow ")
var vectorImages = document.querySelectorAll(".vectors")
const drpDownS = document.querySelectorAll(".drp-icon")
const burger = document.querySelector(".burger")
const closeButton = document.querySelector(".xBtn")
const mobileMenu = document.getElementById("mobileMenu")
const mobileDropD = document.querySelector(".languageAllMobile")
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    
    burger.classList.add('invert');
    theme.classList.add("dark-mode-theme");
    logo.classList.add("invert")
    logoMob.classList.add("invert")
    mobileDropD.style.backgroundColor = "#201d34";
    mobileMenu.style.backgroundColor = "#201d34";
    closeButton.classList.add("invert");
    for (const drpDown of drpDownS) {
        drpDown.classList.add('invert');
    }
    for (const vectors of vectorImages) {
        vectors.classList.add('invert');
    }
    for (const arrow of arrows) {
        arrow.classList.add('invert');
    }

      for ( const toggleBtnS of  toggleBtn){
        toggleBtnS.classList.add("dark-mode-toggle");
        toggleBtnS.checked=true;
    }
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    logo.classList.remove("invert")
    burger.classList.remove('invert');
    logoMob.classList.remove("invert")
    mobileDropD.style.backgroundColor = "white";
    mobileMenu.style.backgroundColor = "white";
    closeButton.classList.remove("invert");
    
    for (const drpDown of drpDownS) {
        drpDown.classList.remove('invert');
    }
    for (const arrow of arrows) {
        arrow.classList.remove('invert');
    }
    for (const vectors of vectorImages) {
        vectors.classList.remove('invert');
    }
    for ( const toggleBtnS of  toggleBtn){
        toggleBtnS.classList.remove("dark-mode-toggle");
        toggleBtnS.checked=false;
    }
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); 
}

document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
      
    })
  })

toggleBtn.forEach(item => {
    item.addEventListener("click", (e) => {
        darkMode = localStorage.getItem("dark-mode"); 
        if (darkMode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
})

function clickOut() {

    window.open(
        "https://yourketo.diet"
    )
}

function initCarousel() {
    const gallery = document.querySelector(".gallery")
    const items = document.getElementsByClassName("galleryElement")

    items[0].classList.add("active");
    items[1].classList.add("next");

    let currentActiveItem = 0;
    let nextItem = 1;
    document.querySelectorAll(".line")[0].classList.add("pink");

    function next() {
        if (currentActiveItem == items.length - 1) {
            return
        }
        items[currentActiveItem].classList.remove("active");
        items[nextItem].classList.add("active");

        document.querySelectorAll(".line")[0].classList.remove("pink");
        document.querySelectorAll(".line")[1].classList.add("pink");

        if (currentActiveItem < nextItem) {
            items[nextItem].classList.remove("next");
            items[currentActiveItem].classList.add("prev");
        } else {
            items[nextItem].classList.remove("prev");
            items[currentActiveItem].classList.add("next");
        }


        let temp = currentActiveItem;
        currentActiveItem = nextItem;

        nextItem = temp;
    }

    function prev() {
        if (currentActiveItem == 0) {
            return
        }
        items[currentActiveItem].classList.remove("active");
        items[nextItem].classList.add("active");

        document.querySelectorAll(".line")[1].classList.remove("pink");
        document.querySelectorAll(".line")[0].classList.add("pink");

        if (currentActiveItem < nextItem) {
            items[nextItem].classList.remove("next");
            items[currentActiveItem].classList.add("prev");

        } else {
            items[nextItem].classList.remove("prev");
            items[currentActiveItem].classList.add("next");
        }


        let temp = currentActiveItem;
        currentActiveItem = nextItem;

        nextItem = temp;
    }



    let nextB = gallery.getElementsByClassName('arrow--next')[0],
        prevB = gallery.getElementsByClassName('arrow--prev')[0];

    nextB.addEventListener('click', next);
    prevB.addEventListener('click', prev);


}

initCarousel();


galleryItem = document.getElementsByClassName("galleryElement")


let flag = false;
function toggleDropDown() {
    if (flag == false) {
        document.querySelector(".languageAll").style.display = "block";
        flag = true;
    } else {
        document.querySelector(".languageAll").style.display = "none";
        flag = false;
    }
}

function toggleMobileDropDown() {
    if (flag == false) {
        document.querySelector(".languageAllMobile").style.display = "block";
        flag = true;
    } else {
        document.querySelector(".languageAllMobile").style.display = "none";
        flag = false;
    }
}


function toggleMobileMenu() {
    document.querySelector("#mobileMenu").style.display = "flex";
}


function closeMobile() {
    document.querySelector("#mobileMenu").style.display = "none";
}

