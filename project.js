//NavBar Variables
const toBio = document.getElementById('navToBio');
const toTech = document.getElementById('navToTechnologies');
const toProjects = document.getElementById('navToProjects');
const bioPage = document.getElementById('bioPage');
const technologiesPage = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');

// NavBar Event Listeners
toBio.addEventListener('click', (e) => {
    bioPage.style.display = 'block';
    technologiesPage.style.display = 'none';
    projectsPage.style.display = 'none';
})

toTech.addEventListener('click', (e) => {
    bioPage.style.display = 'none';
    technologiesPage.style.display = 'block';
    projectsPage.style.display = 'none';
})

toProjects.addEventListener('click', (e) => {
    bioPage.style.display = 'none';
    technologiesPage.style.display = 'none';
    projectsPage.style.display = 'block';
})

//Projects Page Array
let projects = [
    {   
        title: "Cool Project", 
        screenshot: "<img class='projectImg' src='http://gotoflashgames.com/files/file/033.jpg'>", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "<a href='https://github.com/nss-evening-cohort-8/js-part-deux'>URL</a>", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "<a href='https://github.com/nss-evening-cohort-8/js-part-deux'>Github URL</a>"
    },

    {   
        title: "Cool Project", 
        screenshot: "<img class='projectImg' src='http://gotoflashgames.com/files/file/033.jpg'>", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "<a href='https://github.com/nss-evening-cohort-8/js-part-deux'>URL</a>", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "<a href='https://github.com/nss-evening-cohort-8/js-part-deux'>Github URL</a>"
    },  
    {   
        title: "Cool Project", 
        screenshot: "<img class='projectImg' src='http://gotoflashgames.com/files/file/033.jpg'>", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "<a href='https://github.com/nss-evening-cohort-8/js-part-deux'>URL</a>", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "<a href='https://github.com/nss-evening-cohort-8/js-part-deux'>Github URL</a>"
    },
];


const writeToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
    let newString = '';
    for(let i=0; i<projects.length; i++){
        if (projects[i].available === true) {
         newString += `<div id="projectsPage">`
         newString +=`<h3>${projects[i].title}<h3>`
         newString +=`<h3>${projects[i].screenshot}<h3>`
         newString +=`<h3>${projects[i].description}<h3>`
         newString +=`<h3>${projects[i].technologiesUsed}<h3>`
         newString +=`<h3>${projects[i].url}<h3>`
         newString +=`<h3>${projects[i].githubUrl}<h3>`
         newString +=`</div>`;
        
    }
    
     writeToDom(newString, 'projectsPage');
  }
};

createProjectCards();