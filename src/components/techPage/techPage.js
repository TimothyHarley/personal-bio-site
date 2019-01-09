import $ from 'jquery';
import './techPage.scss';

const createTechPage = () => {
  const domString = `
  <div>
    <h1>Tech Page</h1>
  </div>
  `;
  $('#technologiesPage').html(domString);
};

export default createTechPage;
