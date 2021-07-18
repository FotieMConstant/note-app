// console.log("Loading script.js..." );

let notes = []; // all the notes of our app


let addButton = $('#addNote');
let noteList = $('ul'); // our list of notes which will contain li's
let warning = $('#warning');

// checking if array has notes aaded already
hasNotes = () => {
    if(notes.length == 0){
       
     return false; 
    // noteList.append("<h4 id='warning'>No note added yet 😉 </h4>")
    }else{
        // console.log(notes.length)
        return true
    }
}



// function to create the ui and display the notes
createNote = () => {

    let noteText = $('#note').val(); // getting the text of the note
  
    // building the object array to be pushed
  if (noteText != "") {  
//should not run if textarea is empty
    let noteObject = {
        id: notes.length,
        body: noteText
    }
    console.log("adding note...");
    console.log(noteObject);
    notes.push(noteObject);
    // console.log(notes)
    // check if has notes
    if(hasNotes()){
        // when there are notes
        warning.text(notes.length)
    }else{
        warning.text("No note added yet 😉 ")
    }
    noteList.append("<li id='note_"+noteObject.id+"'>"+noteObject.body+"</li>");
    $("#note_"+noteObject.id).hide();
    $("#note_"+noteObject.id).fadeIn();
    //empty textarea when note is added
     var not = $.trim($('#note').val(''))
    console.log(notes);


    // store
    localStorage.setItem("notesStore", JSON.stringify(notes));
   
} else if (noteText=== ''){
    console.log('warning, warning, empty note')
    warning.text('Cannot add empty note 😉');
}

}


// create notes event listener
addButton.click(function () {
    createNote();
})



//  main code
let notesGottenFromStore = JSON.parse(localStorage.getItem("notesStore"));
console.log(notesGottenFromStore);
if(notesGottenFromStore){
    notes = notesGottenFromStore;
}

if(hasNotes()){
    // when there are notes
    warning.text(notes.length)
    noteList.hide();
    noteList.fadeIn();
    notes.map((item, index) => {
        noteList.append("<li id='note_"+index+"'>"+item.body+"</li>")
    });
}else{
    warning.text("No note added yet 😉 ")
}

console.log(notes)
