(function($) { $(function() {

  $('input[type="text"]').each(function() {
    if($(this).attr('id') != undefined && ($(this).attr('id').indexOf('phone') > 0 || $(this).attr('id').indexOf('fax') > 0)) {
        console.log($(this).attr('id'));
      $(this).mask('(000) 000-0000');
    } 

  });
}); })(jQuery)