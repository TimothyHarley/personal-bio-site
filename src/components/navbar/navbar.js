import $ from 'jquery';
import './navbar.scss';

const navbarEvents = () => {
  $('.navbar').on('click', (e) => {
    if (e.target.id === 'bioButton') {
      $('#bioPage').children().show();
      $('#technologiesPage').hide();
      $('#projectsPage').hide();
    } else if (e.target.id === 'techButton') {
      $('#bioPage').children().hide();
      $('#technologiesPage').show();
      $('#projectsPage').hide();
    } else if (e.target.id === 'projectsButton') {
      $('#bioPage').children().hide();
      $('#technologiesPage').hide();
      $('#projectsPage').show();
    } else if (e.target.id === 'timHarley') {
      e.preventDefault();
      $('div.parallax').animate({ scrollTop: $('#bioPage').offset().top }, 8000);
    }
  });
};

const createNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
    <a id="timHarley" class="navbar-brand" href="#">Timothy Harley</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" id="bioButton" href="#bioPage">Biography</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" id="techButton" href="#technologiesPage">Technologies</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" id="projectsButton" href="#projectsPage">Projects</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" id="contactButton" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  $('#navbar').html(domString);

  $('div.parallax').scroll(() => {
    $('nav').toggleClass('scrolled', $('div.parallax').scrollTop() > 400);
    $('nav').toggleClass('scrolledMore', $('div.parallax').scrollTop() > 730);
  });

  navbarEvents();
};

export default createNavbar;
