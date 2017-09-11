
(function(){
'use strict';
var doc = document,
  toArrayByClassName = function toArrayByClassName(nodes) {
    return [].slice.call(doc.getElementsByClassName(nodes));
  },
  fotos = toArrayByClassName('proud__mask');



var modal = (function() {
  var node = document.getElementById('modal-1'),
    state = 'hide',
    img = document.getElementById('img'),
    name = document.getElementById('name'),
    close = document.getElementById('close'),
    fotoArray = [
      {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-4.jpg',
        name: 'Caroline Beek'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-3.jpg',
        name: 'Chandra vancova'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-2.jpg',
        name: 'Dayle Peters'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-1.jpg',
        name: 'Alan Smith'
      }
    ]

  function getImage(e) {
    var index = e.target.getAttribute('data-foto');
    var cell = fotoArray[index]
    img.src = cell.url;
    name.innerHTML = cell.name;
  }

  function show(e) {
    state = 'show'
    node.classList.add('show')
    node.classList.remove('hide')
    getImage(e)
  }
  function hide(e) {
    state = 'hide'
    node.classList.add('hide')
    setTimeout(function() {
      node.classList.remove('show')
    }, 300)
  }

  function changeState(e) {
    state == 'hide'
      ? show(e)
      : hide(e)
  }
  node.removeEventListener('click', changeState);
  node.addEventListener('click', changeState);
  return {changeState: changeState, show: show}
})()

fotos.forEach(function(el, i) {
  el.addEventListener('click', modal.changeState)
})

})()


(function(){
'use strict';
var doc = document,
  toArrayByClassName = function toArrayByClassName(nodes) {
    return [].slice.call(doc.getElementsByClassName(nodes));
  },
  fotos = toArrayByClassName('proud__mask');



var modal = (function() {
  var node = document.getElementById('modal-1'),
    state = 'hide',
    img = document.getElementById('img'),
    name = document.getElementById('name'),
    close = document.getElementById('close'),
    fotoArray = [
      {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-4.jpg',
        name: 'Caroline Beek'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-3.jpg',
        name: 'Chandra vancova'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-2.jpg',
        name: 'Dayle Peters'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-1.jpg',
        name: 'Alan Smith'
      }
    ]

  function getImage(e) {
    var index = e.target.getAttribute('data-foto');
    var cell = fotoArray[index]
    img.src = cell.url;
    name.innerHTML = cell.name;
  }

  function show(e) {
    state = 'show'
    node.classList.add('show')
    node.classList.remove('hide')
    getImage(e)
  }
  function hide(e) {
    state = 'hide'
    node.classList.add('hide')
    setTimeout(function() {
      node.classList.remove('show')
    }, 300)
  }

  function changeState(e) {
    state == 'hide'
      ? show(e)
      : hide(e)
  }
  node.removeEventListener('click', changeState);
  node.addEventListener('click', changeState);
  return {changeState: changeState, show: show}
})()

fotos.forEach(function(el, i) {
  el.addEventListener('click', modal.changeState)
})

})()


(function(){
'use strict';
var doc = document,
  toArrayByClassName = function toArrayByClassName(nodes) {
    return [].slice.call(doc.getElementsByClassName(nodes));
  },
  fotos = toArrayByClassName('proud__mask');



var modal = (function() {
  var node = document.getElementById('modal-1'),
    state = 'hide',
    img = document.getElementById('img'),
    name = document.getElementById('name'),
    close = document.getElementById('close'),
    fotoArray = [
      {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-4.jpg',
        name: 'Caroline Beek'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-3.jpg',
        name: 'Chandra vancova'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-2.jpg',
        name: 'Dayle Peters'
      }, {
        url: 'https://livedemo00.template-help.com/wordpress_51770/wp-content/uploads/2014/09/team-1.jpg',
        name: 'Alan Smith'
      }
    ]

  function getImage(e) {
    var index = e.target.getAttribute('data-foto');
    var cell = fotoArray[index]
    img.src = cell.url;
    name.innerHTML = cell.name;
  }

  function show(e) {
    state = 'show'
    node.classList.add('show')
    node.classList.remove('hide')
    getImage(e)
  }
  function hide(e) {
    state = 'hide'
    node.classList.add('hide')
    setTimeout(function() {
      node.classList.remove('show')
    }, 300)
  }

  function changeState(e) {
    state == 'hide'
      ? show(e)
      : hide(e)
  }
  node.removeEventListener('click', changeState);
  node.addEventListener('click', changeState);
  return {changeState: changeState, show: show}
})()

fotos.forEach(function(el, i) {
  el.addEventListener('click', modal.changeState)
})

})()



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

function initMap() {
     var uluru = {lat: -27.112723, lng:  -109.3496865};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 10,
       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
   }

(function() {
  'use strict';
  var doc = document,
    toArrayByClassName = function toArrayByClassName(nodes) {
      return [].slice.call(doc.getElementsByClassName(nodes));
    },
    distanceToTop = function(element) {

      return parseInt((element.offsetTop - window.pageYOffset) - element.scrollHeight - 14);
    },
    header = doc.getElementById('header'),
    fotos = toArrayByClassName('proud__mask'),
    nav = document.getElementById('filter-nav'),
    itemContainer = toArrayByClassName('filter-menu__items-container'),
    items = toArrayByClassName('filter-menu__item'),
    footer = document.getElementById('footer'),
    limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
    scrollSize = limit - window.innerHeight;
  console.log('scroll size', scrollSize);

  arrow.addEventListener('click', scrollIt)

  function scrollIt() {
    var stateID;
    function invoke() {
      /*always reset previous Interval*/
      clearInterval(stateID);
      setTimeout(function() {
        stateID = setInterval(scrollIncrement, 10);
      }, 0);

      function scrollIncrement() {
        /*
                    FireFox and Internet Explorer use 'var html' height
                    Chrome,Safari use 'var body' height
                    startPoint + window.innerHeight === document.body.scrollHeight -> if true - bottom of document
                    percentage ->quantity of scrolled %
                    increment ->relative to percentage
                    Math.ceil - round to biger number, if we go Down
                    MAth.floor - round to less number, if we go Up
                    */
        /*scrolltop scrollheight*/

        var html = document.documentElement,
          body = document.body,
          startPoint = window.pageYOffset || body.scrollTop || html.scrollTop,
          destination=100,
          toTop = destination - startPoint,
          endPoint = Math.abs(toTop),
          direction = toTop / endPoint || 0,
          bottom = endPoint + window.pageYOffset,
          percentage = startPoint / (bottom / 100),
          calculateStep = direction * (50 - (50 / 100 * percentage)),
          increment;


        direction > 0
          ? increment = Math.ceil(calculateStep)
          : increment = Math.floor(calculateStep);
        console.log('\nincrement', increment)

        var newY = startPoint + increment;
        window.scrollTo(0, newY);
        if (percentage == 100 || startPoint == 0 || endPoint == 0 || direction == NaN) {
          clearInterval(stateID);
        }

      } //scrollIncrement
    }
    invoke()
  }

  nav.addEventListener('click', function(e) {
    e.preventDefault();
    var reAssignCSSItemClass = function(filteredValues, filterBy) {
      filteredValues.map(function(elem, index) {
        filterBy == 'show-all'
          ? elem.classList.remove('hide')
          : '';
        /*search for item-x css class*/
        var regexp = /item-\d/g;
        var res = elem.className.match(regexp).join();
        /*remove current item-x css class*/
        elem.classList.remove(res)
        /*reassign new  item-x css class based on DOM element position*/
        elem.classList.add('item-' + (index + 1))
        return elem;
      })

    }
    var filterBy = e.target.getAttribute('data-filter')
    if (filterBy == 'show-all') {
      itemContainer[0].classList.remove('minify');
      reAssignCSSItemClass(items, filterBy);
      /*return from callback*/
      return true;
    } else {
      /*set height of container equal to rows height of items*/
      itemContainer[0].classList.add('minify');

      var regexp = new RegExp(filterBy, 'i')
      var result = items.map(function(elem, index) {
        /*filter must to match with css class*/
        var test = elem.className.match(regexp)
        if (test === null) {
          /*all element that does not match - hide*/
          elem.classList.add('hide')
        } else {
          /*all element that match - don't hide*/
          elem.classList.remove('hide')
          return elem;
        }
      })
      /*return current matched elements*/
      var activeElements = result.filter(function(value) {
        return value
          ? value
          : '';
      })
      /*reassign css classes for a couple of matched elements*/
      reAssignCSSItemClass(activeElements, filterBy);
    }

  })

  var modal = (function() {
    var node = document.getElementById('modal-1'),
      state = 'hide',
      img = document.getElementById('img'),
      name = document.getElementById('name'),
      close = document.getElementById('close'),
      fotoArray = [
        {
          url: './img/courses/audio/big1.jpg',
          name: 'audio format'
        }, {
          url: './img/courses/image/big1.jpg',
          name: 'image format'
        }, {
          url: './img/courses/image/big2.jpg',
          name: 'image format'
        }, {
          url: './img/courses/video/small1.jpg',
          name: 'video format'
        }, {
          url: './img/courses/audio/big2.jpg',
          name: 'audio format'
        }, {
          url: './img/courses/video/small2.jpg',
          name: 'video format'
        }, {
          url: './img/courses/image/big3.jpg',
          name: 'image format'
        }, {
          url: './img/courses/video/small3.jpg',
          name: 'video format'
        }, {
          url: './img/courses/audio/big3.jpg',
          name: 'audio dformat'
        }
      ]

    function getImage(e) {
      var index = e.target.getAttribute('data-foto');
      var cell = fotoArray[index]
      img.src = cell.url;
      name.innerHTML = cell.name;
    }

    function show(e) {
      state = 'show'
      node.classList.add('show')
      node.classList.remove('hide')
      getImage(e)
    }
    function hide(e) {
      state = 'hide'
      node.classList.add('hide')
      setTimeout(function() {
        node.classList.remove('show')
      }, 300)
    }

    function changeState(e) {
      state == 'hide'
        ? show(e)
        : hide(e)
    }
    node.removeEventListener('click', changeState);
    node.addEventListener('click', changeState);
    return {changeState: changeState, show: show}
  })()

  fotos.forEach(function(el, i) {
    el.addEventListener('click', modal.changeState)
  })


})()

(function() {
  'use strict';
  var doc = document,
    header = doc.getElementById('header'),
    arrow = document.getElementById('arrow');

  doc.addEventListener("scroll", function(e) {
    var pageYOffset = window.pageYOffset;

    /*header logic*/
    if (pageYOffset < 10) {
      header.className = "";
      arrow.classList.remove('show');
    }
    if (pageYOffset > 100) {
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

      function scrollIncrement() {
        /*
                    FireFox and Internet Explorer use 'var html' height
                    Chrome,Safari use 'var body' height
                    startPoint + window.innerHeight === document.body.scrollHeight -> if true - bottom of document
                    percentage ->quantity of scrolled %
                    increment ->relative to percentage
                    Math.ceil - round to biger number, if we go Down
                    MAth.floor - round to less number, if we go Up
                    */
        /*scrolltop scrollheight*/

        var html = document.documentElement,
          body = document.body,
          startPoint = window.pageYOffset || body.scrollTop || html.scrollTop,
          destination=100,
          toTop = destination - startPoint,
          endPoint = Math.abs(toTop),
          direction = toTop / endPoint || 0,
          bottom = endPoint + window.pageYOffset,
          percentage = startPoint / (bottom / 100),
          calculateStep = direction * (50 - (50 / 100 * percentage)),
          increment;


        direction > 0
          ? increment = Math.ceil(calculateStep)
          : increment = Math.floor(calculateStep);
        console.log('\nincrement', increment)

        var newY = startPoint + increment;
        window.scrollTo(0, newY);
        if (percentage == 100 || startPoint == 0 || endPoint == 0 || direction == NaN) {
          clearInterval(stateID);
        }

      } //scrollIncrement
    }
    invoke()
  }
})()

'use strict';

var doc = document,
  toArrayByClassName = function toArrayByClassName(nodes) {
    return [].slice.call(doc.getElementsByClassName(nodes));
  },
  header = doc.getElementById('header'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  dropdownContainer = toArrayByClassName('dropdown-container'),
  dropdownMenu = toArrayByClassName('dropdown-menu'),
  parallaxItem = toArrayByClassName('anim-item-1'),
  animatedBlocks = toArrayByClassName('anim-item-2'),
  animatedBlocks3 = toArrayByClassName('anim-item-3'),
  slides = toArrayByClassName('slide');

/**
 *@param {object} settings, properties: prev/next(button objects), slides (slide, usually 'LI' element)
 */
var slider = function(settings) {

  /*private method*/
  var currentIndex = 0,
    slideIndex = 1,
    slideClick;

  /*closure*/
  var wrapper = function wrapper(n) {
    return slideClick = function slideClick() {
      return slideRender(slideIndex += n);
    };
  };

  settings.prev.addEventListener('click', wrapper(-1));
  settings.next.addEventListener('click', wrapper(1));

  /*private method*/
  function slideRender(n) {
    var i,
      slides = settings.slides;

    n > slides.length
      ? slideIndex = 1
      : false;
    n < 1
      ? slideIndex = slides.length
      : false;

    slides.forEach(function(element, index) {
      element.style.display = "none";
      index == slideIndex - 1
        ? element.style.opacity = "0"
        : false;
    });
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
      slides[slideIndex - 1].style.opacity = "1";
    }, 0);
  }
  slideRender(slideIndex);
  return {wrapper: wrapper, slideRender: slideRender};
}({prev: prev, next: next, slides: slides});

window.addEventListener('resize', function(e) {
  function transitionNone(element) {
    element.style.transition = "none";
  }
  var mix = parallaxItem.concat(animatedBlocks, animatedBlocks3);
  mix.forEach(transitionNone);
});
window.addEventListener('load', function(e) {
  parallaxItem.forEach(function(element) {
    element.style.transition = "all 1s ease";
  });
  setTimeout(function() {
    window.scrollTo(0, 0);
  });
});

doc.addEventListener("scroll", function(e) {
  var run = new Promise(function(res, rej) {
    var pageYOffset = window.pageYOffset;
    console.log('scroll')
    if (e) {
      /*header logic*/
      if (pageYOffset < 10) {
        header.className = "";
      }
      if (pageYOffset > 100) {
        header.className = "scrolled";
        parallaxItem.forEach(function(element, index) {
          element.className = "anim-item-1 item-" + (index + 1);
        });
      }
      if (pageYOffset > 400) {
        animatedBlocks.forEach(function(element, index) {
          element.className = "anim-item-2 item-" + (index + 5);
        });
      }
      if (pageYOffset > 600) {
        animatedBlocks3.forEach(function(element, index) {
          element.className = "anim-item-3 item-" + (index + 8);
        });
      }
      /*Async code goes here */
      res('done');
    } else {
      rej('cancel');
    }
  });
  run.then(function(result) {});
});



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

function initMap() {
     var uluru = {lat: -27.112723, lng:  -109.3496865};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 10,
       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
   }

(function() {
  'use strict';
  var doc = document,
    toArrayByClassName = function toArrayByClassName(nodes) {
      return [].slice.call(doc.getElementsByClassName(nodes));
    },
    distanceToTop = function(element) {

      return parseInt((element.offsetTop - window.pageYOffset) - element.scrollHeight - 14);
    },
    header = doc.getElementById('header'),
    fotos = toArrayByClassName('proud__mask'),
    nav = document.getElementById('filter-nav'),
    itemContainer = toArrayByClassName('filter-menu__items-container'),
    items = toArrayByClassName('filter-menu__item'),
    footer = document.getElementById('footer'),
    limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
    scrollSize = limit - window.innerHeight;
  console.log('scroll size', scrollSize);

  arrow.addEventListener('click', scrollIt)

  function scrollIt() {
    var stateID;
    function invoke() {
      /*always reset previous Interval*/
      clearInterval(stateID);
      setTimeout(function() {
        stateID = setInterval(scrollIncrement, 10);
      }, 0);

      function scrollIncrement() {
        /*
                    FireFox and Internet Explorer use 'var html' height
                    Chrome,Safari use 'var body' height
                    startPoint + window.innerHeight === document.body.scrollHeight -> if true - bottom of document
                    percentage ->quantity of scrolled %
                    increment ->relative to percentage
                    Math.ceil - round to biger number, if we go Down
                    MAth.floor - round to less number, if we go Up
                    */
        /*scrolltop scrollheight*/

        var html = document.documentElement,
          body = document.body,
          startPoint = window.pageYOffset || body.scrollTop || html.scrollTop,
          destination=100,
          toTop = destination - startPoint,
          endPoint = Math.abs(toTop),
          direction = toTop / endPoint || 0,
          bottom = endPoint + window.pageYOffset,
          percentage = startPoint / (bottom / 100),
          calculateStep = direction * (50 - (50 / 100 * percentage)),
          increment;


        direction > 0
          ? increment = Math.ceil(calculateStep)
          : increment = Math.floor(calculateStep);
        console.log('\nincrement', increment)

        var newY = startPoint + increment;
        window.scrollTo(0, newY);
        if (percentage == 100 || startPoint == 0 || endPoint == 0 || direction == NaN) {
          clearInterval(stateID);
        }

      } //scrollIncrement
    }
    invoke()
  }

  nav.addEventListener('click', function(e) {
    e.preventDefault();
    var reAssignCSSItemClass = function(filteredValues, filterBy) {
      filteredValues.map(function(elem, index) {
        filterBy == 'show-all'
          ? elem.classList.remove('hide')
          : '';
        /*search for item-x css class*/
        var regexp = /item-\d/g;
        var res = elem.className.match(regexp).join();
        /*remove current item-x css class*/
        elem.classList.remove(res)
        /*reassign new  item-x css class based on DOM element position*/
        elem.classList.add('item-' + (index + 1))
        return elem;
      })

    }
    var filterBy = e.target.getAttribute('data-filter')
    if (filterBy == 'show-all') {
      itemContainer[0].classList.remove('minify');
      reAssignCSSItemClass(items, filterBy);
      /*return from callback*/
      return true;
    } else {
      /*set height of container equal to rows height of items*/
      itemContainer[0].classList.add('minify');

      var regexp = new RegExp(filterBy, 'i')
      var result = items.map(function(elem, index) {
        /*filter must to match with css class*/
        var test = elem.className.match(regexp)
        if (test === null) {
          /*all element that does not match - hide*/
          elem.classList.add('hide')
        } else {
          /*all element that match - don't hide*/
          elem.classList.remove('hide')
          return elem;
        }
      })
      /*return current matched elements*/
      var activeElements = result.filter(function(value) {
        return value
          ? value
          : '';
      })
      /*reassign css classes for a couple of matched elements*/
      reAssignCSSItemClass(activeElements, filterBy);
    }

  })

  var modal = (function() {
    var node = document.getElementById('modal-1'),
      state = 'hide',
      img = document.getElementById('img'),
      name = document.getElementById('name'),
      close = document.getElementById('close'),
      fotoArray = [
        {
          url: './img/courses/audio/big1.jpg',
          name: 'audio format'
        }, {
          url: './img/courses/image/big1.jpg',
          name: 'image format'
        }, {
          url: './img/courses/image/big2.jpg',
          name: 'image format'
        }, {
          url: './img/courses/video/small1.jpg',
          name: 'video format'
        }, {
          url: './img/courses/audio/big2.jpg',
          name: 'audio format'
        }, {
          url: './img/courses/video/small2.jpg',
          name: 'video format'
        }, {
          url: './img/courses/image/big3.jpg',
          name: 'image format'
        }, {
          url: './img/courses/video/small3.jpg',
          name: 'video format'
        }, {
          url: './img/courses/audio/big3.jpg',
          name: 'audio dformat'
        }
      ]

    function getImage(e) {
      var index = e.target.getAttribute('data-foto');
      var cell = fotoArray[index]
      img.src = cell.url;
      name.innerHTML = cell.name;
    }

    function show(e) {
      state = 'show'
      node.classList.add('show')
      node.classList.remove('hide')
      getImage(e)
    }
    function hide(e) {
      state = 'hide'
      node.classList.add('hide')
      setTimeout(function() {
        node.classList.remove('show')
      }, 300)
    }

    function changeState(e) {
      state == 'hide'
        ? show(e)
        : hide(e)
    }
    node.removeEventListener('click', changeState);
    node.addEventListener('click', changeState);
    return {changeState: changeState, show: show}
  })()

  fotos.forEach(function(el, i) {
    el.addEventListener('click', modal.changeState)
  })


})()

(function() {
  'use strict';
  var doc = document,
    header = doc.getElementById('header'),
    arrow = document.getElementById('arrow');

  doc.addEventListener("scroll", function(e) {
    var pageYOffset = window.pageYOffset;

    /*header logic*/
    if (pageYOffset < 10) {
      header.className = "";
      arrow.classList.remove('show');
    }
    if (pageYOffset > 100) {
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

      function scrollIncrement() {
        /*
                    FireFox and Internet Explorer use 'var html' height
                    Chrome,Safari use 'var body' height
                    startPoint + window.innerHeight === document.body.scrollHeight -> if true - bottom of document
                    percentage ->quantity of scrolled %
                    increment ->relative to percentage
                    Math.ceil - round to biger number, if we go Down
                    MAth.floor - round to less number, if we go Up
                    */
        /*scrolltop scrollheight*/

        var html = document.documentElement,
          body = document.body,
          startPoint = window.pageYOffset || body.scrollTop || html.scrollTop,
          destination=100,
          toTop = destination - startPoint,
          endPoint = Math.abs(toTop),
          direction = toTop / endPoint || 0,
          bottom = endPoint + window.pageYOffset,
          percentage = startPoint / (bottom / 100),
          calculateStep = direction * (50 - (50 / 100 * percentage)),
          increment;


        direction > 0
          ? increment = Math.ceil(calculateStep)
          : increment = Math.floor(calculateStep);
        console.log('\nincrement', increment)

        var newY = startPoint + increment;
        window.scrollTo(0, newY);
        if (percentage == 100 || startPoint == 0 || endPoint == 0 || direction == NaN) {
          clearInterval(stateID);
        }

      } //scrollIncrement
    }
    invoke()
  }
})()

'use strict';

var doc = document,
  toArrayByClassName = function toArrayByClassName(nodes) {
    return [].slice.call(doc.getElementsByClassName(nodes));
  },
  header = doc.getElementById('header'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  dropdownContainer = toArrayByClassName('dropdown-container'),
  dropdownMenu = toArrayByClassName('dropdown-menu'),
  parallaxItem = toArrayByClassName('anim-item-1'),
  animatedBlocks = toArrayByClassName('anim-item-2'),
  animatedBlocks3 = toArrayByClassName('anim-item-3'),
  slides = toArrayByClassName('slide');

/**
 *@param {object} settings, properties: prev/next(button objects), slides (slide, usually 'LI' element)
 */
var slider = function(settings) {

  /*private method*/
  var currentIndex = 0,
    slideIndex = 1,
    slideClick;

  /*closure*/
  var wrapper = function wrapper(n) {
    return slideClick = function slideClick() {
      return slideRender(slideIndex += n);
    };
  };

  settings.prev.addEventListener('click', wrapper(-1));
  settings.next.addEventListener('click', wrapper(1));

  /*private method*/
  function slideRender(n) {
    var i,
      slides = settings.slides;

    n > slides.length
      ? slideIndex = 1
      : false;
    n < 1
      ? slideIndex = slides.length
      : false;

    slides.forEach(function(element, index) {
      element.style.display = "none";
      index == slideIndex - 1
        ? element.style.opacity = "0"
        : false;
    });
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
      slides[slideIndex - 1].style.opacity = "1";
    }, 0);
  }
  slideRender(slideIndex);
  return {wrapper: wrapper, slideRender: slideRender};
}({prev: prev, next: next, slides: slides});

window.addEventListener('resize', function(e) {
  function transitionNone(element) {
    element.style.transition = "none";
  }
  var mix = parallaxItem.concat(animatedBlocks, animatedBlocks3);
  mix.forEach(transitionNone);
});
window.addEventListener('load', function(e) {
  parallaxItem.forEach(function(element) {
    element.style.transition = "all 1s ease";
  });
  setTimeout(function() {
    window.scrollTo(0, 0);
  });
});

doc.addEventListener("scroll", function(e) {
  var run = new Promise(function(res, rej) {
    var pageYOffset = window.pageYOffset;
    console.log('scroll')
    if (e) {
      /*header logic*/
      if (pageYOffset < 10) {
        header.className = "";
      }
      if (pageYOffset > 100) {
        header.className = "scrolled";
        parallaxItem.forEach(function(element, index) {
          element.className = "anim-item-1 item-" + (index + 1);
        });
      }
      if (pageYOffset > 400) {
        animatedBlocks.forEach(function(element, index) {
          element.className = "anim-item-2 item-" + (index + 5);
        });
      }
      if (pageYOffset > 600) {
        animatedBlocks3.forEach(function(element, index) {
          element.className = "anim-item-3 item-" + (index + 8);
        });
      }
      /*Async code goes here */
      res('done');
    } else {
      rej('cancel');
    }
  });
  run.then(function(result) {});
});



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

function initMap() {
     var uluru = {lat: -27.112723, lng:  -109.3496865};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 10,
       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
   }

(function() {
  'use strict';
  var doc = document,
    toArrayByClassName = function toArrayByClassName(nodes) {
      return [].slice.call(doc.getElementsByClassName(nodes));
    },
    distanceToTop = function(element) {

      return parseInt((element.offsetTop - window.pageYOffset) - element.scrollHeight - 14);
    },
    header = doc.getElementById('header'),
    fotos = toArrayByClassName('proud__mask'),
    nav = document.getElementById('filter-nav'),
    itemContainer = toArrayByClassName('filter-menu__items-container'),
    items = toArrayByClassName('filter-menu__item'),
    footer = document.getElementById('footer'),
    limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
    scrollSize = limit - window.innerHeight;
  console.log('scroll size', scrollSize);



  nav.addEventListener('click', function(e) {
    e.preventDefault();
    var reAssignCSSItemClass = function(filteredValues, filterBy) {
      filteredValues.map(function(elem, index) {
        filterBy == 'show-all'
          ? elem.classList.remove('hide')
          : '';
        /*search for item-x css class*/
        var regexp = /item-\d/g;
        var res = elem.className.match(regexp).join();
        /*remove current item-x css class*/
        elem.classList.remove(res)
        /*reassign new  item-x css class based on DOM element position*/
        elem.classList.add('item-' + (index + 1))
        return elem;
      })

    }
    var filterBy = e.target.getAttribute('data-filter')
    if (filterBy == 'show-all') {
      itemContainer[0].classList.remove('minify');
      reAssignCSSItemClass(items, filterBy);
      /*return from callback*/
      return true;
    } else {
      /*set height of container equal to rows height of items*/
      itemContainer[0].classList.add('minify');

      var regexp = new RegExp(filterBy, 'i')
      var result = items.map(function(elem, index) {
        /*filter must to match with css class*/
        var test = elem.className.match(regexp)
        if (test === null) {
          /*all element that does not match - hide*/
          elem.classList.add('hide')
        } else {
          /*all element that match - don't hide*/
          elem.classList.remove('hide')
          return elem;
        }
      })
      /*return current matched elements*/
      var activeElements = result.filter(function(value) {
        return value
          ? value
          : '';
      })
      /*reassign css classes for a couple of matched elements*/
      reAssignCSSItemClass(activeElements, filterBy);
    }

  })

  var modal = (function() {
    var node = document.getElementById('modal-1'),
      state = 'hide',
      img = document.getElementById('img'),
      name = document.getElementById('name'),
      close = document.getElementById('close'),
      fotoArray = [
        {
          url: './img/courses/audio/big1.jpg',
          name: 'audio format'
        }, {
          url: './img/courses/image/big1.jpg',
          name: 'image format'
        }, {
          url: './img/courses/image/big2.jpg',
          name: 'image format'
        }, {
          url: './img/courses/video/small1.jpg',
          name: 'video format'
        }, {
          url: './img/courses/audio/big2.jpg',
          name: 'audio format'
        }, {
          url: './img/courses/video/small2.jpg',
          name: 'video format'
        }, {
          url: './img/courses/image/big3.jpg',
          name: 'image format'
        }, {
          url: './img/courses/video/small3.jpg',
          name: 'video format'
        }, {
          url: './img/courses/audio/big3.jpg',
          name: 'audio dformat'
        }
      ]

    function getImage(e) {
      var index = e.target.getAttribute('data-foto');
      var cell = fotoArray[index]
      img.src = cell.url;
      name.innerHTML = cell.name;
    }

    function show(e) {
      state = 'show'
      node.classList.add('show')
      node.classList.remove('hide')
      getImage(e)
    }
    function hide(e) {
      state = 'hide'
      node.classList.add('hide')
      setTimeout(function() {
        node.classList.remove('show')
      }, 300)
    }

    function changeState(e) {
      state == 'hide'
        ? show(e)
        : hide(e)
    }
    node.removeEventListener('click', changeState);
    node.addEventListener('click', changeState);
    return {changeState: changeState, show: show}
  })()

  fotos.forEach(function(el, i) {
    el.addEventListener('click', modal.changeState)
  })


})()

(function() {
  'use strict';
  var doc = document,
    header = doc.getElementById('header'),
    arrow = document.getElementById('arrow'),

    limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
    scrollSize = limit - window.innerHeight;
  console.log('scroll size', scrollSize);

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
          destination = 100,
          leftToEndPoint = destination - startPoint,
          endPoint = Math.abs(leftToEndPoint),
          direction = leftToEndPoint > 0
            ? 1
            : -1,
          onePercent = destination / 100,
          increment,
          percentage = leftToEndPoint > 0
            ?/*if scroll down*/
            Math.floor(startPoint / onePercent)
            :/*if scroll up*/
            100 - (Math.floor(endPoint / onePercent)),
            /*smooth logic*/
          calculateStep = Math.floor(direction * (50 - (50 / 100 * percentage)));
console.log(percentage)
        increment = Math.ceil(calculateStep)

        var newY = startPoint + (increment);
        window.scrollTo(0, newY);


        if (percentage == 100) {
          clearInterval(stateID);
        }

      } //scrollIncrement
    }//invoke
    invoke()
  }
})()

'use strict';

var doc = document,
  toArrayByClassName = function toArrayByClassName(nodes) {
    return [].slice.call(doc.getElementsByClassName(nodes));
  },
  header = doc.getElementById('header'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next'),
  dropdownContainer = toArrayByClassName('dropdown-container'),
  dropdownMenu = toArrayByClassName('dropdown-menu'),
  parallaxItem = toArrayByClassName('anim-item-1'),
  animatedBlocks = toArrayByClassName('anim-item-2'),
  animatedBlocks3 = toArrayByClassName('anim-item-3'),
  slides = toArrayByClassName('slide');

/**
 *@param {object} settings, properties: prev/next(button objects), slides (slide, usually 'LI' element)
 */
var slider = function(settings) {

  /*private method*/
  var currentIndex = 0,
    slideIndex = 1,
    slideClick;

  /*closure*/
  var wrapper = function wrapper(n) {
    return slideClick = function slideClick() {
      return slideRender(slideIndex += n);
    };
  };

  settings.prev.addEventListener('click', wrapper(-1));
  settings.next.addEventListener('click', wrapper(1));

  /*private method*/
  function slideRender(n) {
    var i,
      slides = settings.slides;

    n > slides.length
      ? slideIndex = 1
      : false;
    n < 1
      ? slideIndex = slides.length
      : false;

    slides.forEach(function(element, index) {
      element.style.display = "none";
      index == slideIndex - 1
        ? element.style.opacity = "0"
        : false;
    });
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
      slides[slideIndex - 1].style.opacity = "1";
    }, 0);
  }
  slideRender(slideIndex);
  return {wrapper: wrapper, slideRender: slideRender};
}({prev: prev, next: next, slides: slides});

window.addEventListener('resize', function(e) {
  function transitionNone(element) {
    element.style.transition = "none";
  }
  var mix = parallaxItem.concat(animatedBlocks, animatedBlocks3);
  mix.forEach(transitionNone);
});
window.addEventListener('load', function(e) {
  parallaxItem.forEach(function(element) {
    element.style.transition = "all 1s ease";
  });
  setTimeout(function() {
    window.scrollTo(0, 0);
  });
});

doc.addEventListener("scroll", function(e) {
  var run = new Promise(function(res, rej) {
    var pageYOffset = window.pageYOffset;
    console.log('scroll')
    if (e) {
      /*header logic*/
      if (pageYOffset < 10) {
        header.className = "";
      }
      if (pageYOffset > 100) {
        header.className = "scrolled";
        parallaxItem.forEach(function(element, index) {
          element.className = "anim-item-1 item-" + (index + 1);
        });
      }
      if (pageYOffset > 400) {
        animatedBlocks.forEach(function(element, index) {
          element.className = "anim-item-2 item-" + (index + 5);
        });
      }
      if (pageYOffset > 600) {
        animatedBlocks3.forEach(function(element, index) {
          element.className = "anim-item-3 item-" + (index + 8);
        });
      }
      /*Async code goes here */
      res('done');
    } else {
      rej('cancel');
    }
  });
  run.then(function(result) {});
});
