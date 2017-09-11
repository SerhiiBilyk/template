(function() {
  'use strict';
  var doc = document,
    header = doc.getElementById('header'),
    arrow = document.getElementById('arrow'),
    fil = document.getElementById('filter-nav'),

    limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
    scrollSize = limit - window.innerHeight;


  doc.addEventListener("scroll", function(e) {
    var pageYOffset = window.pageYOffset;

    /*header logic*/
    if (pageYOffset < 55) {
      header.className = "";
      arrow.classList.remove('show');
    }
    if (pageYOffset >= 55) {
      header.className = "scrolled";
      arrow.classList.add('show');
    }
  })

  arrow.addEventListener('click', scrollIt)
  function scrollIt() {
    var stateID;
    function invoke() {
      /*always reset previous Interval*/
      clearInterval(stateID);
      setTimeout(function() {
        stateID = setInterval(scrollIncrement, 10);
      }, 0);

      /**
     FireFox and Internet Explorer use 'var html' height
     Chrome,Safari use 'var body' height
     startPoint + window.innerHeight === document.body.scrollHeight -> if true - bottom of document
     destination -- magic number, please insert argument to main function instead destination value
     leftToEndPoint --non absolute value, distance from current position to destination
     endPoint --absolute (non sign) distance to destination
     direction --  1 -> down , -1 -> up
     percentage --quantity of scrolled %
     increment --relative to percentage
     Math.ceil -- round to biger number, if we go Down
     MAth.floor -- round to less number, if we go Up
 */
      function scrollIncrement() {
        var html = document.documentElement,
          body = document.body,
          startPoint = window.pageYOffset || body.scrollTop || html.scrollTop,
          destination = 10,
          leftToEndPoint = destination - startPoint,
          endPoint = Math.abs(leftToEndPoint),
          direction = leftToEndPoint > 0
            ? 1
            : -1,
          onePercent = ((document.body.scrollHeight - window.innerHeight) - destination) / 100,
          increment,
          percentage = leftToEndPoint > 0
            ?/*if scroll down*/
            Math.floor(startPoint / onePercent)
            :/*if scroll up*/
            100 - (Math.floor(endPoint / onePercent)),
          /*smooth logic*/
          calculateStep = Math.floor(direction * (50 - (50 / 100 * percentage)));

        increment = Math.ceil(calculateStep)
        var newY = startPoint + (increment);
        window.scrollTo(0, newY);
        if (percentage == 100) {
          clearInterval(stateID);
        }
      } //scrollIncrement
    } //invoke
    invoke()
  }
})()
