document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contact-form');
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');
	const themeToggle = document.querySelector('.theme-toggle');
	const menuToggle = document.querySelector('.menu-toggle');
	const navLinks = document.querySelector('.nav-links');

	themeToggle.addEventListener('click', () => {
		document.body.dataset.theme =
			document.body.dataset.theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', document.body.dataset.theme);
	});

	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		document.body.dataset.theme = savedTheme;
	} else if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		document.body.dataset.theme = 'dark';
	}

	menuToggle.addEventListener('click', () => {
		navLinks.classList.toggle('active');
	});

	document.addEventListener('click', (e) => {
		if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
			navLinks.classList.remove('active');
		}
	});

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			navLinks.classList.remove('active');
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (validateForm()) {
			alert('Form submitted successfully!');
			console.log({
				name: nameInput.value,
				email: emailInput.value,
				message: messageInput.value,
			});
			form.reset();
		}
	});

	function validateForm() {
		let isValid = true;

		if (nameInput.value.trim() === '') {
			alert('Please enter your name');
			isValid = false;
		}

		if (emailInput.value.trim() === '') {
			alert('Please enter your email');
			isValid = false;
		} else if (!isValidEmail(emailInput.value)) {
			alert('Please enter a valid email address');
			isValid = false;
		}

		if (messageInput.value.trim() === '') {
			alert('Please enter your message');
			isValid = false;
		}

		return isValid;
	}

	function isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
});
