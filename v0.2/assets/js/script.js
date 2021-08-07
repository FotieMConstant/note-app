// quilljsjs lib
let quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Your Note Here...',
    theme: 'snow'  // or 'bubble'
  });

//   console.log(quill.root.innerHTML)


// our note class
class Note{
    constructor(){
        this.notesArray = [
            {
            id : 0,
            title : "bro 0",
            body : "Msall body",
            addedDate : "dateTime",    
            lastModifiedDate : null
            },
            {
            id : 1,
            title : "bro 1",
            body : "Msall body",
            addedDate : "dateTime",    
            lastModifiedDate : null
            },
            {
            id : 2,
            title : "bro 2",
            body : "Msall body",
            addedDate : "dateTime",    
            lastModifiedDate : null
            },
            {
            id : 3,
            title : "bro 3",
            body : "Msall body",
            addedDate : "dateTime",    
            lastModifiedDate : null
            },
        ];
    }
    // methods
    createNote(title, body){

        // get currrent date and time
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        //  our note function
        const note = {
            id : this.generateIds(),
            title : title,
            body : body,
            addedDate : dateTime,    
            lastModifiedDate : null
        };
        //  console.log(note)

        // to make sure that the titles are never the same
        // check if already exitst
        if(this.notesArray.length != 0) {
         const checkIfExists = this.notesArray.map(item => item.title).includes(note.title) ? true : false;
            if(checkIfExists) {
                return false;
            }else{
                this.notesArray.push(note); // pushing the note in our array
                return true;
            }
        }else{
            this.notesArray.push(note); // pushing the note in our array
            return true;
        }

     
    }
    // generate todo id
    generateIds() {
        // we get the array of ids
        let noteIds = [];
        this.notesArray.map(item =>{
            noteIds.push(item.id);
        });
        const generatedId = Math.max(...noteIds) +1;
        return generatedId;

    }
    // get all todos
    getAllNotes() {
        return this.notesArray;
    }
    // delete todo
    deleteNote(noteId) {
        console.log("Removing item eith id => "+noteId);
        this.notesArray.map((item , index) =>{
            if(item.id == noteId){
                this.notesArray.splice(index, 1);
            }
        });
    }
    // function to change background colour of a note
};
//  End of class

let note = new Note();

$("#__addNotebtn").click( () => {
    console.log("You clicked!");
   let title = $("#__title").val();
   let body =  document.querySelector(".ql-editor").innerHTML;
   $("ul").append(`${body}`)
   console.log(body)
   let added = note.createNote(title, body);
   console.log(added);
  

    // check if it was added
   if(added){
    console.log("You created note successfully!");
   }else{
    console.log("You note was not added!");

   }
   console.log(note.getAllNotes());


});
note.deleteNote(3);
console.log("Deleted => "+note.generateIds());
console.log(note.getAllNotes());


