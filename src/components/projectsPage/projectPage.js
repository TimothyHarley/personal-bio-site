import $ from 'jquery';
import './projectPage.scss';
import getProjects from '../../helpers/projectRequest';

const createProjectsPage = (projects) => {
  let domString = '';

  projects.forEach((project) => {
    if (project.available === true) {
      domString += `
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

  $('#projectsPage').html(domString);
};

getProjects()
  .then((data) => {
    console.log(data);
    createProjectsPage(data);
  })
  .catch((error) => {
    console.error({ error });
  });

export default getProjects;
