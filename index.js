const escuchar = document.getElementById('escuchar');
const parar = document.getElementById('parar');
const text = document.getElementById('text');
const parent = document.querySelector('.parent');
const recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.onresult = (event) => {
	const results = event.results;
	const frase = results[results.length - 1][0].transcript;
	text.value += frase;
};

escuchar.addEventListener('click', () => {
	recognition.start();
	escuchar.style = 'display:none';
	parent.classList.add = 'item';
	parent.classList.add = 'uno';
});

parar.addEventListener('click', () => {
	recognition.abort();
	escuchar.style = 'display:inline-block';
});
