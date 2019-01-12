import $ from 'jquery';
import './parallax.scss';

import parallax1 from '../../images/parallax/Background1.png';
import parallax2 from '../../images/parallax/Background2.png';
import parallax3 from '../../images/parallax/Background3.png';
import parallax4 from '../../images/parallax/Background4.png';
import parallax5 from '../../images/parallax/Background5.png';

const createParallax = () => {
  const domString = `
    <img id="parallax1" class="img-fluid max-width: 100% parallax__layer parallax__layer--1" alt="Responsive image">
    <img id="parallax2" class="img-fluid max-width: 100% parallax__layer parallax__layer--2" alt="Responsive image">
    <img id="parallax3" class="img-fluid max-width: 100% parallax__layer parallax__layer--3" alt="Responsive image">
    <img id="parallax4" class="img-fluid max-width: 100% parallax__layer parallax__layer--4" alt="Responsive image">
    <img id="parallax5" class="img-fluid max-width: 100% parallax__layer parallax__layer--5" alt="Responsive image">
    `;

  $('#parallax').html(domString);

  $('#parallax1').attr('src', parallax1);
  $('#parallax2').attr('src', parallax2);
  $('#parallax3').attr('src', parallax3);
  $('#parallax4').attr('src', parallax4);
  $('#parallax5').attr('src', parallax5);
};

export default createParallax;
