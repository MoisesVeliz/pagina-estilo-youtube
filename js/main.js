(() => {
	// Variables
	const contenedor = document.querySelector('#container');
	const btnBars = document.querySelector('#btn-bars');
	const screen = window;

	// Funciones
	const medirAncho = function () {
		if (screen.innerWidth <= 768) {
			contenedor.classList.remove('desplegar');
		}
	};
	medirAncho();

	// Eventos
	btnBars.addEventListener('click', () => {
		contenedor.classList.toggle('desplegar');
	} );

	screen.addEventListener('resize', () => {
		medirAncho();
	} );
})();