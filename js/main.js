(() => {
	// Variables
	const contenedor = document.querySelector('#container');
	const btnBars = document.querySelector('#btn-bars');
	const screen = window;
	const interruptor = document.querySelector('#switch');
	const header = document.querySelector('#header');
	const menu = document.querySelector('#menu');
	const main = document.querySelector('#main');

	// Funciones
	const medirAncho = function () {
		if (screen.innerWidth <= 768) {
			contenedor.classList.remove('desplegar');
		}
	};
	medirAncho();

	// Eventos
	btnBars.addEventListener( 'click', () => {
		contenedor.classList.toggle('desplegar');
	} );

	screen.addEventListener( 'resize', () => {
		medirAncho();
	} );

	interruptor.addEventListener( 'click', () => {
		header.classList.toggle('dark');
		menu.classList.toggle('dark');
		main.classList.toggle('dark');
		interruptor.classList.toggle('activate');
	} );
})();