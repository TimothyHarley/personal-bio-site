import $ from 'jquery';
import './techPage.scss';
import html from '../../images/icons/HTML5.png';
import css from '../../images/icons/CSS3.png';
import bootstrap from '../../images/icons/bootstrap.png';
import firebase from '../../images/icons/firebase.png';
import github from '../../images/icons/github.png';
import javascript from '../../images/icons/javascrip.png';
import jquery from '../../images/icons/jquery.png';
import npm from '../../images/icons/npm.png';
import react from '../../images/icons/react.png';
import sass from '../../images/icons/sass.png';
import webpack from '../../images/icons/webpack.png';
import reddit from '../../images/icons/reddit.png';
import csharp from '../../images/icons/c.png';
import dotnet from '../../images/icons/DotNet.png';
import sql from '../../images/icons/SQL.png';
import vs from '../../images/icons/VisualStudio.png';

const createTechPage = () => {
  const domString = `
  <div>
    <h3>These are some of the tools and Technologies that I've learned to use at Nashville Software School</h3>
      <div class='iconBox mx-auto'>
        <ul class='nav text-center'>
          <li><img id='html' /><br>html</li>
          <li><img id='sass' /><br>Sass</li>
          <li><img id='bootstrap' /><br>Bootstrap</li>
          <li><img id='javascript' /><br>JavaScript</li>
          <li><img id='jquery' /><br>JQuery</li>
          <li><img id='react' /><br>React</li>          
          <li><img id='npm' /><br>NPM</li>
          <li><img id='firebase' /><br>Firebase</li>
          <li><img id='css' /><br>css</li>
          <li><img id='reddit' /><br>Reddit</li>
          <li><img id='github' /><br>GitHub</li>
          <li><img id='webpack' /><br>Webpack</li>
          <li><img id='csharp' /><br>C#</li>
          <li><img id='dotnet' /><br>.Net</li>
          <li><img id='sql' /><br>SQL</li>
          <li><img id='vs' /><br>Visual Studio</li>
        </ul>
      </div>
  </div>
  `;
  $('#technologiesPage').html(domString);
  $('#bootstrap').attr('src', bootstrap);
  $('#css').attr('src', css);
  $('#firebase').attr('src', firebase);
  $('#github').attr('src', github);
  $('#html').attr('src', html);
  $('#javascript').attr('src', javascript);
  $('#jquery').attr('src', jquery);
  $('#npm').attr('src', npm);
  $('#react').attr('src', react);
  $('#sass').attr('src', sass);
  $('#webpack').attr('src', webpack);
  $('#reddit').attr('src', reddit);
  $('#csharp').attr('src', csharp);
  $('#dotnet').attr('src', dotnet);
  $('#sql').attr('src', sql);
  $('#vs').attr('src', vs);
};

export default createTechPage;
