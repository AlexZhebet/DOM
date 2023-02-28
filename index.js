const input = document.querySelector('.input');
const list = document.querySelectorAll('li');

input.addEventListener('input', (e) => {
	const valueInput = e.target.value;
	list.forEach(el => {
		if(el.textContent.toLowerCase().indexOf(valueInput.toLowerCase()) > -1){
			el.style.display = 'block';
		}else {
			el.style.display = 'none';
		}
	})
})

