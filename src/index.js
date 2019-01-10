import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import navbar from './components/navbar/navbar';
import mountains from './images/mountains.png';
import bioPage from './components/bioPage/bioPage';
import techPage from './components/techPage/techPage';
import projectsPage from './components/projectsPage/projectPage';
import footer from './components/footer/footer';

$('#mountains').attr('src', mountains);

const initializeApp = () => {
  navbar();
  bioPage();
  techPage();
  projectsPage();
  footer();
};

initializeApp();
