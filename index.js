const escuchar = document.getElementById('escuchar');
const parar = document.getElementById('parar');
const text = document.getElementById('text');
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
});

parar.addEventListener('click', () => {
	recognition.abort();
});
