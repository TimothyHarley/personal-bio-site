import $ from 'jquery';
import './bioPage.scss';
import timAndLogan from '../../images/timAndLogan.jpg';

const createBioPage = () => {
  $('#timAndLogan').attr('src', timAndLogan);
  const domString = `
  <div class="col-6">
    <p>I have worked in a bakery making donuts for 10 years.  The best part of the job is that at the end of the day, I can step back and admire the work I've finished.  The worst part of the job is that I've peaked.  
    There wasn't anything left for me to learn.  I learned a little coding recreationly and quickly found that I enjoyed it.  Just like 
    cooking I could admire my finished product.  Unlike working in a bakery, however, I could continue to learn and discover new things indefinitly in software coding.  I decided it was time for a career change. </p>
  </div>
  `;
  $('#bioPage').append(domString);
};

export default createBioPage;
