let active = "about";

const switchFunction = (active) => {
    switch (active) {
        case 'about':
            return 'about_us'
        case 'work':
            return "work";
        case 'freelance':
            return "freelance";
        case 'skill':
            return "skill";
        case 'contact':
            return "contact";
        default:
            return "about_us";
    }
}

const switchClass = () => {
    document.getElementsByClassName(switchFunction(active))[0].classList.remove('fadeIn');
    document.getElementsByClassName(switchFunction(active))[0].classList.add('fadeOut');
    document.getElementById(active).classList.remove('active');
    let actveTimeout = active;
    setTimeout(() => { document.getElementsByClassName(switchFunction(actveTimeout))[0].classList.add('hidden') }, 900)
}

const activeClass = (activeClass, calledBtn) => {
    document.getElementsByClassName(activeClass)[0].classList.remove('fadeOut');
    document.getElementsByClassName(activeClass)[0].classList.add('fadeIn');
    document.getElementById(calledBtn).classList.add('active');
    setTimeout(() => { document.getElementsByClassName(activeClass)[0].classList.remove('hidden') }, 100)
}

const activateFunction = (calledBtn) => {
    if (calledBtn === active) return;
    switchClass();
    setTimeout(() => {
        active = calledBtn;
        activeClass(switchFunction(calledBtn), calledBtn)
    }, 150)
}

document.getElementById("about").addEventListener("click", () => activateFunction('about'));
document.getElementById("work").addEventListener("click", () => activateFunction('work'));
document.getElementById("freelance").addEventListener("click", () => activateFunction('freelance'));
document.getElementById("skill").addEventListener("click", () => activateFunction('skill'));
document.getElementById("contact").addEventListener("click", () => activateFunction('contact'));
document.getElementById("contactMe").addEventListener("click", () => activateFunction('contact'));
