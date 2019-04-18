const elm = document.querySelector('#js-focus');

elm.addEventListener('focus', function() {
  console.log('focus on element');
});

document.body.addEventListener('focus', function() {
  console.log('focus on body');
}, true);