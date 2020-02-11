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
        <table class='nav text-center'>
          <tbody>
            <tr>
              <td><img id='html' /><br>html</td>
              <td><img id='sass' /><br>Sass</td>
              <td><img id='bootstrap' /><br>Bootstrap</td>
              <td><img id='javascript' /><br>JavaScript</td>
              <td><img id='jquery' /><br>JQuery</td>
              <td><img id='react' /><br>React</td>          
              <td><img id='npm' /><br>NPM</td>
              <td><img id='firebase' /><br>Firebase</td>
            </tr>
            <tr>
              <td><img id='css' /><br>css</td>
              <td><img id='reddit' /><br>Reddit</td>
              <td><img id='github' /><br>GitHub</td>
              <td><img id='webpack' /><br>Webpack</td>
              <td><img id='csharp' /><br>C#</td>
              <td><img id='dotnet' /><br>.Net</td>
              <td><img id='sql' /><br>SQL</td>
              <td><img id='vs' /><br>Visual Studio</td>
            </tr>
          </tbody>
        </table>
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
