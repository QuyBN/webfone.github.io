function myFunction() {
    var navE= document.querySelector(".wrapper-nav")
    var hedE= document.querySelector(".wrapper-header")
    const sticky= hedE.offsetTop + 194;
       if (window.pageYOffset >= sticky) {
       navE.classList.add("sticky")
       }
       else {
       navE.classList.remove("sticky");
       }
   }

    let pullTop = document.querySelector(".pull_top");
    let pullBottom = document.querySelector(".pull_button");
    console.log
  function a(){
      if( pullTop.offsetTop ==0){
          pullTop.style.display="none"
      }
    }
    function b() {
        if( pullBottom.offsetTop ==0)
        pullBottom.style.display="none"
    }
