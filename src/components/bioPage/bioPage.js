import $ from 'jquery';
import './bioPage.scss';
import timAndLogan from '../../images/timAndLogan.jpg';

const createBioPage = () => {
  const domString = `
  <div class="col-6">
    <img id="timAndLogan" class="img-fluid max-width: 100% shadow" alt="Tim and Logan">
  </div>
  <div class="col-6">
    <p class="indented">For the past decade, I have been a cook at Nashville's famous Donut Den.  The best part of that job is that at the end of the day, I can step back and admire the work I've finished.  The worst part of that job is that I've peaked.  
    There wasn't anything left for me to learn.  I learned a little coding recreationly and quickly found that I enjoyed it.  Just like 
    cooking I could admire my finished product.  Unlike working in a bakery, however, I could continue to learn and discover new things indefinitly in software coding.  I decided it was time for a career change. </p>
    <br/>
    <p class="indented">I like playing videogames, solving puzzles, watching documentaries, and spending time with my family and my dogs, Logan and Nora.  When I have time, I love to travel, go backpacking, and explore new places.  
    I grew up with a family that encouraged me to discover the answers to all my questions rather than expect them to be handed to me.  As a result, I can be a little stubborn about asking for help when I feel like I can figure something out on my own.
    However, at Nashville Software School, I'm learning to be better about asking for help asking when I'm stuck.</p>
  </div>
  `;
  $('#bioPage').html(domString);
  $('#timAndLogan').attr('src', timAndLogan);
};

export default createBioPage;
