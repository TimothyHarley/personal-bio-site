import $ from 'jquery';
import './projectPage.scss';
import getProjects from '../../helpers/projectRequest';

const createProjectsPage = (projects) => {
  let domString = '<div class="d-flex flex-row flex-wrap mx-auto" style="width: 76%">';

  projects.forEach((project) => {
    if (project.available === true) {
      domString += `
    <div class="extraDiv">
      <img src="${project.screenshot}" class="btn project-thumbnail" type="button" data-toggle="modal" data-target="#${project.id}" alt="${project.title}" />
      <div class="modal" id="${project.id}" tabindex="-1" role="dialog" aria-labelledby="${project.title}" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${project.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img class="project-image" src="${project.screenshot}" alt="${project.title}" />
              <p class="project-description">${project.description}</p>
            </div>
            <div class="modal-footer">
              <p><strong>Technologies used on this project:</strong><br> ${project.technologiesUsed}</p>
            </div>
            <div class="modal-footer">
              <a class="github-link btn" href="${project.githubUrl}" target="_blank" role="button">GitHub</a>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
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
