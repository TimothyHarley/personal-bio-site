import $ from 'jquery';
import './footer.scss';

const createFooter = () => {
  const domString = `
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" href="mailto:Timothy.D.Harley@gmail.com"><i class="fas fa-envelope-square fa-5x"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="https://www.linkedin.com/in/tim-harley-a4953b141/" target="_blank"><i class="fab fa-linkedin fa-5x"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="http://www.twitter.com" target="_blank"><i class="fab fa-twitter-square fa-5x"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="https://github.com/TimothyHarley" target="_blank"><i class="fab fa-github-square fa-5x"></i></a>
    </li>
  </ul>
  `;
  $('footer').html(domString);
};

export default createFooter;
