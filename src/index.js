import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import navbar from './components/navbar/navbar';
import parallax1 from './images/parallax/Background1.png';
import parallax2 from './images/parallax/Background2.png';
import parallax3 from './images/parallax/Background3.png';
import parallax4 from './images/parallax/Background4.png';
import parallax5 from './images/parallax/Background5.png';
import bioPage from './components/bioPage/bioPage';
import techPage from './components/techPage/techPage';
import projectsPage from './components/projectsPage/projectPage';
import footer from './components/footer/footer';

$('#parallax1').attr('src', parallax1);
$('#parallax2').attr('src', parallax2);
$('#parallax3').attr('src', parallax3);
$('#parallax4').attr('src', parallax4);
$('#parallax5').attr('src', parallax5);

const initializeApp = () => {
  navbar();
  bioPage();
  techPage();
  projectsPage();
  footer();
};

initializeApp();
