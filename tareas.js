let tareas = [];




function agregarTarea() {
    const entradaTarea = document.getElementById('entradaTarea');
    if (entradaTarea.value.trim() === '') return;
    
    tareas.push({ texto: entradaTarea.value, completada: false });
    entradaTarea.value = '';
    actualizarLista();
}

function cambiarEstadoTarea(indice) {
    tareas[indice].completada = !tareas[indice].completada;
    actualizarLista();
}

function editarTarea(indice) {
    const nuevoTexto = prompt("Editar tarea:", tareas[indice].texto);
    if (nuevoTexto) tareas[indice].texto = nuevoTexto;
    actualizarLista();
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    actualizarLista();
}

function tarealista(indice) {
    if (!tareas[indice].completada) {
        tareas[indice].completada = true;
        actualizarLista();
    }
}

function actualizarLista() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';
    let completadas = 0;

    tareas.forEach((tarea, indice) => {
        const tareaElemento = document.createElement('div');
        tareaElemento.classList.add('tarea');
        
        tareaElemento.innerHTML = `
            <span class="${tarea.completada ? 'tarea-completada' : ''}" onclick="cambiarEstadoTarea(${indice})">${tarea.texto}</span>
            <button onclick="editarTarea(${indice})">Editar</button>
            <button onclick="eliminarTarea(${indice})">Eliminar</button>
            <button onclick="tarealista(${indice})">Listo</button>
        `;
        
        listaTareas.appendChild(tareaElemento);
        if (tarea.completada) completadas++;
    });

    document.getElementById('contadorCompletadas').innerText = completadas;
    document.getElementById('contadorIncompletas').innerText = tareas.length - completadas;
}
