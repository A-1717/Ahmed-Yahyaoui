// HEADER function
let home = document.getElementById('home');
let projects = document.getElementById('projects');
let roadmap = document.getElementById('roadmap');
let skills = document.getElementById('skills');
let findme = document.getElementById('find-me');


//btns 
let homeBtn = document.getElementById('home-btn');
let projectsBtn = document.getElementById('projects-btn');
let roadmapBtn = document.getElementById('roadmap-btn');
let skillsBtn = document.getElementById('skills-btn');
let findmeBtn = document.getElementById('findme-btn');

// ASIDE function
let myPics = document.getElementById('my-pics');
let hobies = document.getElementById('hobies');
let from = document.getElementById('from');
let placeLived = document.getElementById('place-lived');
let languages = document.getElementById('languages');
let otherNames = document.getElementById('other-names');
let bloodType = document.getElementById('blood-type');

//btns
let myPicsBtn = document.getElementById('my-picsBtn');
let hobiesBtn = document.getElementById('hobiesBtn');
let fromBtn = document.getElementById('fromBtn');
let placeLivedBtn = document.getElementById('place-livedBtn');
let languagesBtn = document.getElementById('languagesBtn');
let otherNamesBtn = document.getElementById('other-namesBtn');
let bloodTypeBtn = document.getElementById('blood-typeBtn');

const headerContents = [home, projects, roadmap, skills, findme];
const headerBtns = [homeBtn, projectsBtn, roadmapBtn, skillsBtn, findmeBtn];
const asideContents = [myPics, hobies, from, placeLived, languages, otherNames, bloodType];
const asideBtns = [myPicsBtn, hobiesBtn, fromBtn, placeLivedBtn, languagesBtn, otherNamesBtn, bloodTypeBtn];

const displayingBtns = () => {
    headerContents.forEach(value => { 
        value.style.display = 'none';
    })
    headerBtns.forEach(value => {
        value.classList.remove('whenFocus');
    })
    asideContents.forEach(value => {
        value.style.display = 'none';
    })
    asideBtns.forEach(value => {
        value.classList.remove('whenFocus');
    })
}

// =================================== Header events

// home event
homeBtn.addEventListener('click', (e) => {
    if (home.style.display == 'flex') {
        return;
    } else {
        displayingBtns();
        home.style.display = 'flex';
        homeBtn.classList.add('whenFocus');
        headerBtnsPhoneDisplay();
    }
})

// projects event
projectsBtn.addEventListener('click', (e) => {
    if (projects.style.display == 'flex') {
        return;
    } else {
        displayingBtns();
        projects.style.display = 'flex';
        projectsBtn.classList.add('whenFocus');
        headerBtnsPhoneDisplay();
    }
})

// projects event
roadmapBtn.addEventListener('click', (e) => {
    if (roadmap.style.display == 'flex') {
        return;
    } else {
        displayingBtns();
        roadmap.style.display = 'flex';
        roadmapBtn.classList.add('whenFocus');
        headerBtnsPhoneDisplay();
    }
})

// projects event
skillsBtn.addEventListener('click', (e) => {
    if (skills.style.display == 'flex') {
        return;
    } else {
        displayingBtns();
        skills.style.display = 'flex';
        skillsBtn.classList.add('whenFocus');
        headerBtnsPhoneDisplay();
    }
})

// projects event
findmeBtn.addEventListener('click', (e) => {
    if (findme.style.display == 'flex') {
        return;
    } else {
        displayingBtns();
        findme.style.display = 'flex';
        findmeBtn.classList.add('whenFocus');
        headerBtnsPhoneDisplay();
    }
})

//============================== Aside events

myPicsBtn.addEventListener('click', (e) => {
    if (myPics.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        myPics.style.display = 'grid';
        myPicsBtn.classList.add('whenFocus');

    }
})


hobiesBtn.addEventListener('click', (e) => {
    if (hobies.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        hobies.style.display = 'flex';
        hobiesBtn.classList.add('whenFocus');
    }
})

fromBtn.addEventListener('click', (e) => {
    if (from.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        from.style.display = 'flex';
        fromBtn.classList.add('whenFocus');
    }
})

placeLivedBtn.addEventListener('click', (e) => {
    if (placeLived.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        placeLived.style.display = 'flex';
        placeLivedBtn.classList.add('whenFocus');
    }
})

languagesBtn.addEventListener('click', (e) => {
    if (languages.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        languages.style.display = 'flex';
        languagesBtn.classList.add('whenFocus');
    }
})

otherNamesBtn.addEventListener('click', (e) => {
    if (otherNames.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        otherNames.style.display = 'flex';
        otherNamesBtn.classList.add('whenFocus');
    }
})

bloodTypeBtn.addEventListener('click', (e) => {
    if (bloodType.style.display == 'flex') {
        return;
    }
    else {
        displayingBtns();
        bloodType.style.display = 'flex';
        bloodTypeBtn.classList.add('whenFocus');
    }
})

let myImgs = document.querySelectorAll('.img');
let imgsArr = Array.from(myImgs);

imgsArr.forEach(value => {
    value.addEventListener('click', (e) => {
        if (value.classList.contains('fullscreenimg')) {
            value.classList.remove('fullscreenimg')
        } else {
            value.classList.add('fullscreenimg')
        }
    });
})


// header btns tablet and phone screen
let headerBtnsPhone = document.getElementById('header-btns');
let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', (e) => {
    headerBtnsPhoneDisplay();
})

const headerBtnsPhoneDisplay = () => {
    if (headerBtnsPhone.style.display == 'flex') {
        headerBtnsPhone.style.display = 'none';
        menuBtn.classList.toggle('menu-btn-close');
    } else {
        headerBtnsPhone.style.display = 'flex';
        menuBtn.classList.toggle('menu-btn-close');
    }
}

// aside displaying at the tablet size
let profileBtn = document.getElementById('profile');
let aside = document.getElementById('aside');

profileBtn.addEventListener('click', (e) => {
        aside.classList.toggle('aside-hidden');
})

let closeAside = document.getElementById('close-aside');

closeAside.addEventListener('click', (e) => {
    aside.classList.toggle('aside-hidden');
})