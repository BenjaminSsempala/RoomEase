/* small helper for demo pages */
document.addEventListener('DOMContentLoaded', function(){
  // highlight active nav link
  const links = document.querySelectorAll('nav a');
  links.forEach(l=>{
    if(window.location.pathname.endsWith(l.getAttribute('href'))){
      l.classList.add('active');
    }
  });
});
