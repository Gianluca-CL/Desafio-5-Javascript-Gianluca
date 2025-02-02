
let tareas = [
    { id: 1, descripcion: "Estudiar JavaScript", completado: false },
    { id: 2, descripcion: "Hacer ejercicio", completado: false },
    { id: 3, descripcion: "Leer un libro", completado: false }
];


const inputTarea = document.getElementById("nueva-tarea");
const botonAgregar = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");
const totalTareas = document.getElementById("total-tareas");
const tareasCompletadas = document.getElementById("tareas-completadas");


function actualizarContadores() {
    totalTareas.textContent = tareas.length;
    tareasCompletadas.textContent = tareas.filter(tarea => tarea.completado).length;
}


function renderizarTareas() {
    listaTareas.innerHTML = ""; 

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${tarea.completado ? 'completado' : ''}">
                <strong>ID: ${tarea.id}</strong> - ${tarea.descripcion}
            </span>
            <button onclick="cambiarEstado(${index})">✔</button>
            <button onclick="borrarTarea(${index})">❌</button>
        `;
        listaTareas.appendChild(li);
    });

    actualizarContadores();
}


function agregarTarea() {
    const descripcion = inputTarea.value.trim();
    if (descripcion !== "") {
        const nuevoId = tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1;
        tareas.push({ id: nuevoId, descripcion, completado: false });
        inputTarea.value = "";
        renderizarTareas();
    }
}


function borrarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}


function cambiarEstado(index) {
    tareas[index].completado = !tareas[index].completado;
    renderizarTareas();
}


botonAgregar.addEventListener("click", agregarTarea);


renderizarTareas();
