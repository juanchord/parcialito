$(document).ready(function(){

      const data = ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'];
      $("#slides").slidesjs({
           auto:true,
           interval:1000
      });
  
      const childs=  document.getElementsByClassName('slidesjs-navigation');
  
      for(let x = 0; x < childs.length ; x++){
            childs[x].innerHTML = data[x];
           
      };
  
      
      
  });