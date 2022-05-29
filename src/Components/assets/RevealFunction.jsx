const revealFunction = () => {
    var leftReveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;
    for (let i = 0; i < leftReveals.length; i++) {
       var revealTop = leftReveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      leftReveals[i].classList.add('active');
    }
    else {
      leftReveals[i].classList.remove('active');
    }
    }
   
  }

  export default revealFunction;