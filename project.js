let projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];


const writeToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
    let newString = '';
    for(let i=0; i<projects.length; i++){
         newString += `<div id="projectsPage">`
         newString +=`<h3>${projects[i].title}<h3>`
         newString +=`<h3>${projects[i].screenshot}<h3>`
         newString +=`<h3>${projects[i].description}<h3>`
         newString +=`<h3>${projects[i].technologiesUsed}<h3>`
         newString +=`<h3>${projects[i].available}<h3>`
         newString +=`<h3>${projects[i].url}<h3>`
         newString +=`<h3>${projects[i].githubUrl}<h3>`
         newString +=`</div>`;
     
    }
     writeToDom(newString, 'projectsPage');
};

createProjectCards();