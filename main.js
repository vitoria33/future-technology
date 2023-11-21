function addNewTask() {
    var list = document.getElementById("paginas");
    var text = document.getElementById("taskname").value;

if(text.length === 0) {
    alert("Tarefa precisa de ter mais de 1 caracter");
    return;
}

    var listItem = document.createElement("li");
    listItem.className ="list-Item";

    const textElemnet = documenr.createTextNote(text);
    listItem.appendChild(textElement)
    list.appendChild(listItem)
}