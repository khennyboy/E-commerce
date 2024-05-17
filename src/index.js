import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <App />
);

// document.addEventListener('keydown', function (e) {
//         if (e.key === 'Escape' && nav_icon.classList.contains('change')) {
//           nav_icon.classList.remove('change')
//           nav_content.classList.remove('show')
//         }
//       });
      
//         nav_icon.addEventListener('click', function(e){
//         nav_icon.classList.toggle('change')
//         e.stopPropagation()
//         if(nav_icon.classList.contains('change')){
//           nav_content.classList.add('show')
//         }
//       else{
//         nav_content.classList.remove('show')
//       }
//       })
//       document.addEventListener('click', function(e){
//         if(nav_icon.classList.contains('change') && !document.querySelector('.nav_links').contains(e.target) && !document.querySelector('.icons').contains(e.target)){
//           nav_icon.classList.remove('change')
//           nav_content.classList.remove('show')
//           }
//       })
      
      
//       window.addEventListener('resize', function(){
//       if(nav_icon.classList.contains('change')){
//         nav_content.classList.remove('show')
//         nav_icon.classList.remove('change')
//       }
//       })