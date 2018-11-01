import $ from 'jquery';

import 'bootstrap';

import './index.scss';


// NavBar Variables
// const toBio = document.getElementById('navToBio');
const toTech = document.getElementById('navToTechnologies');
const toProjects = document.getElementById('navToProjects');
const bioPage = document.getElementById('bioPage');
const technologiesPage = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');

// NavBar Event Listeners
$('#navToBio').on('click', () => {
  bioPage.style.display = 'block';
  technologiesPage.style.display = 'none';
  projectsPage.style.display = 'none';
});

toTech.addEventListener('click', () => {
  bioPage.style.display = 'none';
  technologiesPage.style.display = 'block';
  projectsPage.style.display = 'none';
});

toProjects.addEventListener('click', () => {
  bioPage.style.display = 'none';
  technologiesPage.style.display = 'none';
  projectsPage.style.display = 'block';
});

const writeToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
  let newString = '';
  for (let i = 0; i < projects.length; i) {
    if (projects[i].available === true) {
      newString += ''`<div id='projectsPage'>`;
      newString += `<h3>${projects[i].title}<h3>`;
      newString += `<h3>${projects[i].screenshot}<h3>`;
      newString += `<h3>${projects[i].description}<h3>`;
      newString += `<h3>${projects[i].technologiesUsed}<h3>`;
      newString += `<h3>${projects[i].url}<h3>`;
      newString += `<h3>${projects[i].githubUrl}<h3>`;
      newString += ''`</div>`;
    }

    writeToDom(newString, 'projectsPage');
  }
};

createProjectCards();
