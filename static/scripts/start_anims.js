let main_square = document.getElementById("wrapper");
	
		let body1 = document.getElementById("body1");

		function body_playing(){
		
			let current_date = Date.now();
			while (current_date + 2000 > Date.now()) {}
			//body.classList.add('body_playing');
			body1.classList.remove('body_loading');
			
			body1.classList.add('body_playing');
			body1.style.animation = 'appearance 2s';
			while (current_date + 2000 > Date.now()) {}
			body1.classList.remove('body_playing');
			body1.classList.add('body_ready');

		}
		body1.classList.add('body_loading');
		main_square.style.animation = 'appearance_square 2s';
		document.addEventListener("DOMContentLoaded", body_playing);
		function main_square_anim(){
			let current_date = Date.now();
			main_square.setAttribute("padding-top", "3.5rem");
		}
		main_square_anim();