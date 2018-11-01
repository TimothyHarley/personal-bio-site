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

const getProjects = () => {
  Promise((resolve, reject) => {
    $.get('../db/Projects.json')
      .done((data) => {
        resolve(data.projects);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const createProjectCards = (arrayOfProjects) => {
  let newString = '';
  arrayOfProjects.forEach((project) => {
    if (project.available === true) {
      newString += ''`<div id='projectsPage'>`;
      newString += `<h3>${project.title}<h3>`;
      newString += `<h3>${project.screenshot}<h3>`;
      newString += `<h3>${project.description}<h3>`;
      newString += `<h3>${project.technologiesUsed}<h3>`;
      newString += `<h3>${project.url}<h3>`;
      newString += `<h3>${project.githubUrl}<h3>`;
      newString += ''`</div>`;
    }
  });
  $('#projectsPage').html(newString);
};

const initProjects = () => {
  getProjects().then((arrayOfProjects) => {
    createProjectCards(arrayOfProjects);
  });
};

initProjects();
