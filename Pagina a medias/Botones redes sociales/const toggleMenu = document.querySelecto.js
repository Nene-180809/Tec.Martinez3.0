const toggleMenu = document.querySelector('nav .toggle-menu');
		const content = document.querySelector('#content');
		const closeBtn = document.querySelector('nav .nav-menu .close-btn');

		toggleMenu.addEventListener('click', function () {
			content.classList.add('active');
		})

		closeBtn.addEventListener('click', function () {
			content.classList.remove('active');
		})

		window.addEventListener('resize', function () {
			if(this.innerWidth > 576) {
				content.classList.remove('active');
			}
		})