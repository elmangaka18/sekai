 // *** ESPACIO PARA EL CÓDIGO JAVASCRIPT DE LOS ESTUDIANTES ***

        // Opción 1: Contador de Clicks
        document.addEventListener('DOMContentLoaded', () => {
            const contadorElemento = document.getElementById('contadorClics');
            const botonElemento = document.getElementById('botonClics');
            let contador = 0;

            if (botonElemento && contadorElemento) { // Verificamos que los elementos existan
                botonElemento.addEventListener('click', () => {
                    contador++;
                    contadorElemento.textContent = contador;
                });
            }
        });
        
        // Opción 3: Mostrar/Ocultar Elemento
        document.addEventListener('DOMContentLoaded', () => {
            const mensajeElemento = document.getElementById('mensajeOcultable');
            const botonToggle = document.getElementById('toggleVisible');

            if (botonToggle && mensajeElemento) { // Verificamos que los elementos existan
                botonToggle.addEventListener('click', () => {
                    if (mensajeElemento.style.display === 'none') {
                        mensajeElemento.style.display = 'block';
                    } else {
                        mensajeElemento.style.display = 'none';
                    }
                });
            }
        });

    /*      // >>>>>>> AQUI ES DONDE DEBES AÑADIR LA NUEVA RUTA PARA LA HORA DEL SERVIDOR <<<<<<<
    else if (pathname === '/api/hora' && req.method === 'GET') {
        // Establece el encabezado Content-Type a text/plain porque solo vamos a enviar texto plano (la hora)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Envía la hora actual del servidor como una cadena de texto
        // `toLocaleString()` formatea la fecha y hora de manera legible según la configuración local
        res.end(new Date().toLocaleString('es-CO')); // Puedes especificar 'es-CO' para Colombia o dejarlo vacío para el local por defecto del servidor
    }
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // MANEJO DE ERRORES PARA RUTAS NO ENCONTRADAS (Opcional, pero recomendado)
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>La página solicitada no existe.</p>');
    } */
