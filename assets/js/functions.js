(function($)
{
	$(document).ready(function()
	{
		$('.bxslider').bxSlider();
		$(".flexnav").flexNav();

		$('#contact-form').validate({
	        lang: 'es',
	        

	        errorPlacement: function(error, element) {
	            
	               error.insertAfter($(element));
	            
	        },

	        submitHandler: function(form) {
	            

	            
	            
	        },invalidHandler: function(form, validator) {
	            
	        }
	    });
	})



    


})(jQuery);