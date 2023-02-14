let button = document.querySelector('button');
console.log(button);
button.addEventListener('click', elemMove);
let elemred = document.querySelector('#animate');

function elemMove() {
      let start = Date.now(); // start date

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        console.log(timePassed)
        elemred.style.left = timePassed / 5.7 + 'px';
        if (timePassed > 2000) {
          clearInterval(timer);
        }
      }, 20);
    }