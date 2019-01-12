import $ from 'jquery';
import './projectPage.scss';
import getProjects from '../../helpers/projectRequest';

const createProjectsPage = (projects) => {
  let domString = '<div class="d-flex flex-row flex-wrap mx-auto" style="width: 76%">';

  projects.forEach((project) => {
    if (project.available === true) {
      domString += `
    <div class="extraDiv">  
      <div class="card">
        <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div>Technologies Used:</div>
            ${project.technologiesUsed}
          </li>
        </ul>
        <div class="card-body">
          <a href="${project.githubUrl}" class="card-link">Github Link</a>
        </div>
      </div>
    </div>`;
    }
  });

  domString += '</div>';

  $('#projectsPage').html(domString);
};

getProjects()
  .then((data) => {
    createProjectsPage(data);
  })
  .catch((error) => {
    console.error({ error });
  });

export default getProjects;
