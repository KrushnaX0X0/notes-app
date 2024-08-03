let noties =[]

function lodelocalstorege(){
    let allnotes = JSON.parse(localStorage.getItem('allnotes'))
    

    if(allnotes){
     noties.push(...allnotes)
     
    }
    lodesnoties()
    
}

lodelocalstorege()


function lodesnoties(){

    localStorage.setItem('allnotes',JSON.stringify(noties));
    let notescontiner = document.getElementById("notes-continer");
    notescontiner.innerHTML = '';
    
    for ( let note of noties ){
       notescontiner.innerHTML += `
       <div class="iteam">
        ${note}
        <button class="btn" onclick = "Deletenoties('${note}')">Delete</button>
        </div>
       `    
    }
}



function Deletenoties(note){
            let noteindex = noties.indexOf(note)
            noties.splice(noteindex,1);
            lodesnoties()

}


function addnoties(){
    let addnoties = document.getElementById("notes-input")
     let note = addnoties.value
     if(!note){
        alert('plase enter a noties')
        return
     }

     noties.push(note) 
     lodesnoties(); 
     addnoties.value = '';


}


