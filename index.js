
  let menu=document.querySelector('#menu-icon')
  let navlist=document.querySelector('.navofindex ul')
  menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
  };

  function sendMail() {
    var link = "mailto:Ahmadhijazi530@gmail.com"
             + "?cc="
             + "&subject=" + encodeURIComponent(document.getElementById('mySubject').value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}


  var options = {
    strings: ['Ahmad Hijazi', ' a Mechanical Engineer'],
    typeSpeed: 120,
    backspped:120,
    loop:true,
  };
  var typed = new Typed('.typing', options);