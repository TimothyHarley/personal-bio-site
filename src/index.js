import 'bootstrap';
import './index.scss';

import navbar from './components/navbar/navbar';
import parallax from './components/parallax/parallax';
import bioPage from './components/bioPage/bioPage';
import techPage from './components/techPage/techPage';
import projectsPage from './components/projectsPage/projectPage';
import footer from './components/footer/footer';

const initializeApp = () => {
  navbar();
  parallax();
  bioPage();
  techPage();
  projectsPage();
  footer();
};

initializeApp();
