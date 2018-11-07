import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import axios from 'axios';

import mountains from './images/mountains.png';

$('#mountains').attr('src', mountains);

// NavBar Variables
// const toBio = document.getElementById('navToBio');
const bioPage = document.getElementById('bioPage');
const technologiesPage = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');

// NavBar Event Listeners
$('#navToBio').on('click', () => {
  bioPage.style.display = 'block';
  technologiesPage.style.display = 'none';
  projectsPage.style.display = 'none';
});

$('#navToTechnologies').on('click', () => {
  bioPage.style.display = 'none';
  technologiesPage.style.display = 'block';
  projectsPage.style.display = 'none';
});

$('#navToProjects').on('click', () => {
  bioPage.style.display = 'none';
  technologiesPage.style.display = 'none';
  projectsPage.style.display = 'block';
});

const getProjects = () => axios.get('http://localhost:3004/projects');

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += `
    <div class="d-flex justify-content-center">  
      <div class="card" style="width: 40rem;">
        <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Technologies Used:</li>
          <li class="list-group-item">${project.technologiesUsed}</li>
        </ul>
        <div class="card-body">
          <a href="#${project.url}" class="card-link">Project link</a>
          <a href="#${project.github}" class="card-link">Github Link</a>
        </div>
      </div>
    </div>`;
    }
  });
  $('#projectsPage').html(newString);
};

getProjects()
  .then((data) => {
    createProjectCards(data.data);
  })
  .catch((error) => {
    console.error({ error });
  });
