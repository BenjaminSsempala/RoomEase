/* main.js - simple page helpers */
document.addEventListener('DOMContentLoaded', function(){
  // add active class to nav links
  const links = document.querySelectorAll('.header .navlinks a');
  links.forEach(l=>{
    try{
      const href = l.getAttribute('href');
      if(window.location.pathname.endsWith(href)){
        l.classList.add('active');
      }
    }catch(e){}
  });
});
