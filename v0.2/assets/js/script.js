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



// our note class
class Note{
    constructor(){
        this.notesArray = [];
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
            id : this.notesArray.length,
            title : title,
            body : body,
            addedDate : dateTime,    
            lastModifiedDate : null
        };
        //  console.log(note)

        // to make sure that the titles are never the same
        // check if already exitst
        if(this.notesArray.length != 0) {
         const checkIfExists = this.notesArray.map(item => item.title).includes(note.title) ? true : false; ;
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
    getAllNotes() {
        return this.notesArray;
    }
    // function to change background colour of a note
    

};
//  End of class

let note = new Note();

$("#__addNotebtn").click( () => {
    console.log("You clicked!");
   let title = $("#__title").val();
   let body =  $("#__body").val();
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



