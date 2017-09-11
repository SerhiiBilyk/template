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
