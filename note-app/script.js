const notescontainer = document.querySelector(".input-field");
const createbtn = document.querySelector("#btn");




function createnote(){
    const noteDiv = document.createElement("div");
    noteDiv.className = 'notes';
    const textArea = document.createElement('textarea');
    textArea.placeholder = "write your notes here....";
    const deleteImg = document.createElement('img');
    deleteImg.src = 'images/delete.png';
    deleteImg.className = 'delete-note-img'
    deleteImg.addEventListener("click", () => {
        noteDiv.remove();
        saveNotes();
    });
    textArea.addEventListener("input",saveNotes);
    noteDiv.appendChild(textArea);
    noteDiv.appendChild(deleteImg);
    return noteDiv;
}
createbtn.addEventListener("click",  function(){
    const NewNote = createnote();
    notescontainer.appendChild(NewNote);
})


function saveNotes(){
    const allNotes = document.querySelectorAll(".notes textarea");
    let data = [];
    allNotes.forEach(note => data.push(note.value));
    localStorage.setItem("notes",JSON.stringify(data));
}

function loadNotes(){
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || "[]";
    savedNotes.forEach( text =>{
        const newNote = createnote();
        newNote.querySelector("textarea").value = text;
        notescontainer.appendChild(newNote);
    });
}
loadNotes();





