import $ from 'jquery';
import './footer.scss';

const createFooter = () => {
  const domString = `
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="mailto:Timothy.D.Harley@gmail.com">Email Me</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="https://www.linkedin.com/in/tim-harley-a4953b141/">Linkedin</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="http://www.twitter.com">Twitter</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="https://github.com/TimothyHarley">GitHub</a>
  </li>
</ul>
  `;
  $('footer').html(domString);
};

export default createFooter;
