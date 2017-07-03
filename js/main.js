
function validateForm(){

	//var name = $("#name").val();
	var patron = /^[a-zA-Z]*$/;



	if($('#name').val() == ''){
		//alert("uh!")
		$('.name-container').append("<span class='error'>Ingrese su nombre</span>");
	}
	else if($('#lastname').val() == ''){
		$('.lastname-container').append("<span class = 'error'>Ingrese su apellido</span>");

	}else if($('#input-email').val() == ''){
		$('.email-container').append("<span class = 'error'>Ingrese su email</span>");

	}else if($('#input-password').val() == ''){
		$('.inputPassword').append("<span class = 'error'>Ingrese su contraseña</span>");

	}
	
/*else if($("#name").val() != patron){
		$('.name-container').append("<span class='error'>Tení que usar solo letras perrin!</span>");	
	}/*else{ $('<span>').remove();}*/



	
};



/*
$(document).ready(function(){
	 // creo variables y asigno 
//	var nombre = $("#name").val();

	$("button").click(function(){
		if ($("#name") == "") {
		   nombre.focus().after("<span class='error'>Ingrese su nombre</span>");		
		}
	})
});


$(document).ready(function(){
	// asigno el formulario a validar
	$(".form-signup").validate({
		rules: {
			name: {requiered: true }
		}
	})
});


function validateForm(){
	$(".form-signup").validate({
		rules: {
			name: {requiered: true }
		}
	})
}
*/