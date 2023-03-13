// function to mark the task complete
function completeTask(id,target){
    const markComplete  = document.getElementsByClassName(id);

    for(let i=0 ; i<markComplete.length ; i++){

        if(markComplete[i].style.textDecoration=="none" || markComplete[i].style.textDecoration=="")
        {
            markComplete[i].style.textDecoration = "line-through";
            target.innerHTML="Mark incomplete";
            
        }
        else
        {
            markComplete[i].style.textDecoration = "none";
            target.innerHTML="Mark complete";
        }
    }


}

// Adding a event listener
document.addEventListener('click',(e)=>{
    // Calling the complete task function if the clicked button is mark complete
    if(e.target.id=="complete"){
        completeTask(e.target.value,e.target);
    }
});