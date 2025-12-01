document.addEventListener('DOMContentLoaded', () => {
    // 1. Array con los 24 consejos de UX/UI
    const consejosUXUI = [
        "Empieza siempre por el usuario. Define quién es, qué necesita y cuál es su contexto.", // Día 1
        "Aplica el principio de Visibilidad del Estado del Sistema. Informa al usuario sobre lo que está sucediendo.", // Día 2
        "Organiza el contenido de forma lógica. Usa la Regla de 3 para categorizar si es posible.", // Día 3
        "Utiliza el tamaño, el color y el espacio para guiar el ojo del usuario (Jerarquía Visual).", // Día 4
        "Reduce la carga cognitiva. No obligues al usuario a recordar información entre pantallas.", // Día 5
        "Diseño de Formularios: Pide solo la información esencial y usa etiquetas claras.", // Día 6
        "Proporciona retroalimentación inmediata a cada acción del usuario (un clic en un botón, por ejemplo).", // Día 7
        "Asegura un contraste de color adecuado para el texto (WCAG 2.1 AA mínimo).", // Día 8
        "Mantén un lenguaje visual unificado (Consistencia): los mismos botones deben funcionar igual en todas partes.", // Día 9
        "Ley de Fitts: Los elementos clicables frecuentes deben ser grandes y fáciles de alcanzar.", // Día 10
        "Utiliza Micro-Interacciones: pequeñas animaciones para deleitar y guiar.", // Día 11
        "Tipografía: Elige una fuente legible. Usa 16px como tamaño base para el cuerpo de texto.", // Día 12
        "Diseña primero para móvil (Mobile-First) y luego escala a pantallas más grandes.", // Día 13
        "Haz que el flujo de tareas sea eficiente. Permite atajos para usuarios experimentados (Usabilidad).", // Día 14
        "Diseño de Iconos: Deben ser intuitivos y, si es posible, acompañados de una etiqueta de texto.", // Día 15
        "Espacio en Blanco (Whitespace): Úsalo para agrupar elementos relacionados y mejorar la comprensión.", // Día 16
        "Pruebas con Usuarios: Observa a 5 usuarios reales. Detectarás el 85% de los problemas de usabilidad.", // Día 17
        "Ley de Jakob: Diseña de forma familiar, ya que los usuarios pasan la mayor parte del tiempo en otros sitios.", // Día 18
        "Personalización: Ofrece experiencias relevantes adaptadas al historial o preferencias del usuario.", // Día 19
        "El botón primario debe ser visualmente el más prominente para indicar la acción principal.", // Día 20
        "Gestión de Errores: Prevé los errores y ofrece una solución útil y constructiva, no solo un mensaje de 'error'.", // Día 21
        "Onboarding: Guía al usuario en el primer uso. Muestra el valor del producto rápidamente.", // Día 22
        "Llamada a la Acción (CTA): Debe ser clara, visible y orientada a la acción (ej. 'Comprar ahora').", // Día 23
        "Añade un toque de diseño emocional o una pequeña sorpresa para crear un recuerdo positivo (El Momento 'Wow')." // Día 24
    ];

    const calendarioDOM = document.getElementById('calendarioAdviento');
    const modal = document.getElementById('modal');
    const modalConsejo = document.getElementById('modalConsejo');
    const modalDia = document.getElementById('modalDia');
    const cerrarModal = document.querySelector('.cerrar-modal');

    // 2. Obtener la fecha actual (solo el día)
    const hoy = new Date();
    // Para las pruebas, puedes cambiar `hoy.getMonth()` por el mes de diciembre (11) y `hoy.getDate()` por el día que desees probar.
    const mesActual = hoy.getMonth(); // 0 (Enero) a 11 (Diciembre)
    const diaActual = hoy.getDate(); // 1 a 31
    
    // Si no es diciembre, no se puede abrir nada.
    const esDiciembre = (mesActual === 11); 

    // 3. Generar las ventanas y asignar eventos
    for (let i = 0; i < 24; i++) {
        const dia = i + 1;
        const ventana = document.createElement('div');
        ventana.classList.add('ventana-adviento');
        ventana.setAttribute('data-dia', dia);
        ventana.innerHTML = dia;

        // Lógica de desbloqueo:
        // Una ventana está 'habilitada' si es diciembre Y el día actual es mayor o igual al día de la ventana.
        const estaHabilitada = esDiciembre && (diaActual >= dia);
        
        if (estaHabilitada) {
            ventana.classList.add('habilitada');
            ventana.addEventListener('click', () => abrirVentana(dia, ventana));
        } else {
            ventana.classList.add('cerrada');
        }

        calendarioDOM.appendChild(ventana);
    }

    // 4. Función para abrir la ventana y mostrar el consejo
    function abrirVentana(dia, elementoVentana) {
        // Marcar la ventana como 'abierta'
        elementoVentana.classList.remove('habilitada');
        elementoVentana.classList.add('abierta');
        // Quitar el número y mostrar un icono o mensaje corto si quieres
        elementoVentana.innerHTML = '✨ Tip'; 

        // Mostrar la Modal
        modalDia.textContent = `Tip de UX/UI del Día ${dia}`;
        // El índice del array es (día - 1)
        modalConsejo.textContent = consejosUXUI[dia - 1]; 
        modal.style.display = 'block';
    }

    // 5. Función para cerrar la Modal
    function cerrarModalFunc() {
        modal.style.display = 'none';
    }

    // Eventos para cerrar la Modal
    cerrarModal.addEventListener('click', cerrarModalFunc);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            cerrarModalFunc();
        }
    });
});