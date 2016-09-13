(function($) {
  $(function() {
    $('.views-field-commerce-unit-price').each(function() {
      if($(this).html().trim() == 'Pending Price Request') {        
        $('.line-item-total-raw').html('Pending Price Request');
        $('#edit-checkout').remove();
        return false;
      }
    })
  });
})(jQuery)