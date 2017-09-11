

(function() {
  'use strict';
  var doc = document,
    toArrayByClassName = function toArrayByClassName(nodes) {
      return [].slice.call(doc.getElementsByClassName(nodes));
    },
    distanceToTop = function(element) {
      return parseInt((element.offsetTop - window.pageYOffset) + element.scrollHeight );
    },
    animated=toArrayByClassName('news__cell'),
    first=distanceToTop(animated[0]);
    console.log(first)

    window.addEventListener('scroll',function(e){
      animated.forEach(function(elem){
        var dist=distanceToTop(elem);
        if(dist < 800){
          elem.classList.add('scroll-anim')
        }
      })
    })
  })()
