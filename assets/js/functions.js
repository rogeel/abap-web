(function($)
{
	$(document).ready(function()
	{
		$('.bxslider').bxSlider();
		$(".flexnav").flexNav();

		$('#contact-form').validate({
	        lang: 'es',
	        

	        errorPlacement: function(error, element) {
	            
	               error.insertBefore($(element));
	            
	        },

	        submitHandler: function(form) {
	        	var v = grecaptcha.getResponse();
			    if(v.length == 0)
			    {
			    	$( '<label class="error" >Debe validar el captcha.</label>' ).insertBefore( $( ".g-recaptcha" ) );

			    }else{
			    	
			    	//form.submit();
			    }
	        	
	            

	            
	            
	        },invalidHandler: function(form, validator) {
	            
	        }
	    });



	    $("#archivo").on('change',function(){
		    $('.fileUpload span:not(.glyphicon)').text(this.files[0].name);
		});
	})



    


})(jQuery);