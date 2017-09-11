
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
