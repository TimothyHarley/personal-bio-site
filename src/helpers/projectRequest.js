import axios from 'axios';
import apiKeys from '../../db/apiKeys';

const firebase = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebase}/projects.json`)
    .then((results) => {
      const projectObject = results.data;
      const projectArray = [];
      if (projectObject !== null) {
        Object.keys(projectObject).forEach((projectID) => {
          projectObject[projectID].id = projectID;
          projectArray.push(projectObject[projectID]);
        });
      }
      resolve(projectArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default getProjects;
