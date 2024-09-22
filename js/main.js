const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((item) => {
	item.addEventListener('mouseover', () => {
		item.style.backgroundColor = '#e0f7fa';
	});

	item.addEventListener('mouseout', () => {
		item.style.backgroundColor = 'white';
	});
});

document.querySelectorAll('.project-item button').forEach((button) => {
	button.addEventListener('click', (event) => {
		const project = event.target.closest('.project-item');
		const details = document.createElement('p');
		details.textContent = 'Here are more details about this project...';
		project.appendChild(details);
	});
});
