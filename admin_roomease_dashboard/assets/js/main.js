document.addEventListener('DOMContentLoaded', function(){
  // active nav
  const links = document.querySelectorAll('.admin-nav a');
  links.forEach(l=>{
    try{
      const href = l.getAttribute('href');
      if(window.location.pathname.endsWith(href) || window.location.pathname.endsWith(href.replace('pages/',''))){
        l.classList.add('active');
      }
    }catch(e){}
  });
  // simple delete simulation on users/listings pages
  document.querySelectorAll('button[data-action="delete"]').forEach(b=>{
    b.addEventListener('click', function(){
      const row = this.closest('tr');
      if(row) row.style.opacity = '0.4';
      this.innerText = 'Deleted';
    });
  });
});
