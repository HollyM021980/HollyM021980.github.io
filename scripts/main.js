$(document).ready(function(event) {

  $('.project').on('click', function() {
    $(this).toggleClass('show-description');
  });

  $('#showModal').on('click',function(){
    $('#openModal').toggle();
  });


  $('.swap-arrow').on('click', function() {
    if ($(this).attr('class') == 'swap-arrow') {
      this.src = this.src.replace('_up','_down');
    } else {
      this.src = this.src.replace('_down','_up');
    }
    $(this).toggleClass('up');
  });

})


