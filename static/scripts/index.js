$(document).ready(function() {
  window.Data.slice(0, 5).forEach(function(image) {
    $('body').append('<img height="50" width="50" src="' + image.url + '" />');
  });
});
