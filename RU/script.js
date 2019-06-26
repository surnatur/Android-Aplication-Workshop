

	$(document).on('click',"#submit", function(kaka){
		//event.preventDefault(kaka);
		var login  = $("#form input.login").val();
		var password  = $("#form input.password").val();
		var name = $("#form input.name").val();
		var lastName = $("#form input.lastName").val();
		var username = $("#form input.username").val();


		//Xndir inchov poxarinel alertn androidi hamar der chem gri php minchev server chlini
		if (login == '') {
			alert("you have not filled the Login area ");
			event.preventDefault(kaka);
		}
		else if (login == ' ') {
			alert("you have not filled the Login area ");
			event.preventDefault(kaka);
		}
		else if (password == '') {
			alert("you have not filled the Password area ");
			event.preventDefault(kaka);
		}
		else if (password == ' ') {
			alert("you have not filled the Password area ");
			event.preventDefault(kaka);
		}
		else if (name == '') {
			alert("you have not filled the Name area ");
			event.preventDefault(kaka);
		}
		else if (name == ' ') {
			alert("you have not filled the Name area ");
			event.preventDefault(kaka);
		}
		else if (lastName == '') {
			alert("you have not filled the Last name area ");
			event.preventDefault(kaka);
		}
		else if (lastName == ' ') {
			alert("you have not filled the Last name area ");
			event.preventDefault(kaka);
		}
		else if (username == '') {
			alert("you have not filled the Username area ");
			event.preventDefault(kaka);
		}
		else if (username == ' ') {
			alert("you have not filled the Username area ");
			event.preventDefault(kaka);
		}

		// $("#form").submit(function(event){
		// 	event.preventDefault();
		// 	$.ajax({
		// 		type: 'post',
		// 		url: 'post.php',
		// 		data: $('#form').serialize(),
		// 		success: function(){
		// 			alert("done");
		// 		}
		// 	});
		// });
	});