import $ from 'jquery';
import './parallax.scss';

import parallax1 from '../../images/parallax/NewBackground1new.png';
import parallax2 from '../../images/parallax/NEWBackground2.png';
import parallax3 from '../../images/parallax/NEWBackground3.png';
import parallax4 from '../../images/parallax/NEWBackground4.png';
import parallax5 from '../../images/parallax/NEWBackground5.png';
import mountains from '../../images/mountains.png';

const createParallax = () => {
  if ($(window).width() >= 1000) {
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
  } else {
    const domString = '<img id="mountains" class="img-fluid max-width: 100% alt="Responsive image">';
    $('#parallax').html(domString);
    $('#mountains').attr('src', mountains);
  }
};

export default createParallax;
