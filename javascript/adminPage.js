document.addEventListener('DOMContentLoaded', function () {
    const movieTable = document.getElementById('movieTable');
    const openModalButton = document.getElementById('openModalButton');
    const saveMovieButton = document.getElementById('saveMovie');
    const movieIdInput = document.getElementById('movieId');
    const movieNameInput = document.getElementById('movieName');
    const movieCategoryInput = document.getElementById('movieCategory');
    const movieDescriptionInput = document.getElementById('movieDescription');
    const moviePublishedInput = document.getElementById('moviePublished');
    const addMovieModal = new bootstrap.Modal(document.getElementById('addMovieModal'));
    let highlightedRow = null; // Para rastrear la fila destacada

    // Función para agregar películas o series a la tabla
    function addMovieToTable(id, name, category, description, published) {
        const row = movieTable.insertRow();
        const cellName = row.insertCell(0);
        const cellCategory = row.insertCell(1);
        const cellDescription = row.insertCell(2);
        const cellPublished = row.insertCell(3);
        const cellEdit = row.insertCell(4);
        const cellDelete = row.insertCell(5);
        const cellHighlight = row.insertCell(6);

        cellName.textContent = name;
        cellCategory.textContent = category;
        cellDescription.textContent = description;
        cellPublished.textContent = published ? "Sí" : "No";

        // Agregar botón Editar
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-primary btn-sm';
        editButton.textContent = 'Editar';
        cellEdit.appendChild(editButton);
        editButton.addEventListener('click', function () {
            // Abre la ventana modal con los valores existentes para editar
            movieIdInput.value = id;
            movieNameInput.value = name;
            movieCategoryInput.value = category;
            movieDescriptionInput.value = description;
            moviePublishedInput.checked = published;
            addMovieModal.show();
            // Actualiza la fila al guardar los cambios
            saveMovieButton.onclick = function () {
                id = movieIdInput.value;
                name = movieNameInput.value;
                category = movieCategoryInput.value;
                description = movieDescriptionInput.value;
                published = moviePublishedInput.checked;
                cellName.textContent = name;
                cellCategory.textContent = category;
                cellDescription.textContent = description;
                cellPublished.textContent = published ? "Sí" : "No";
                addMovieModal.hide();
            };
        });

        // Agregar botón Borrar
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Borrar';
        cellDelete.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () {
            movieTable.deleteRow(row.rowIndex);
            if (row === highlightedRow) {
                highlightedRow = null;
            }
        });

        // Agregar botón Destacar
        const highlightButton = document.createElement('button');
        highlightButton.className = 'btn btn-warning btn-sm';
        highlightButton.textContent = 'Destacar';
        cellHighlight.appendChild(highlightButton);
        highlightButton.addEventListener('click', function () {
            if (highlightedRow) {
                highlightedRow.classList.remove('table-warning');
            }
            highlightedRow = row;
            row.classList.add('table-warning');
        });
    }

    // Evento para abrir la ventana modal
    openModalButton.addEventListener('click', function () {
        movieIdInput.value = '';
        movieNameInput.value = '';
        movieCategoryInput.value = '';
        movieDescriptionInput.value = '';
        moviePublishedInput.checked = false;
        addMovieModal.show();
        // Elimina el resaltado si se agrega una nueva película
        if (highlightedRow) {
            highlightedRow.classList.remove('table-warning');
            highlightedRow = null;
        }
    });

    // Evento para guardar la película/serie en la tabla desde la ventana modal
    saveMovieButton.addEventListener('click', function () {
        const id = movieIdInput.value;
        const name = movieNameInput.value;
        const category = movieCategoryInput.value;
        const description = movieDescriptionInput.value;
        const published = moviePublishedInput.checked;

        if (name) {
            addMovieToTable(id, name, category, description, published);
            addMovieModal.hide();
        }
    });
});