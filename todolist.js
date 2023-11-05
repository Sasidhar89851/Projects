let TaskContainer=document.getElementById("listItems")
const TaskList=[];
function addTask()
{
    let usertask=document.getElementById("usertask");
    if(usertask.value === null || usertask.value === "")
    {
        let Errormsg=document.getElementById("errormsg");
        Errormsg.innerHTML=" Please Enter a Task";
        // Errormsg.style.color='red';
        // Errormsg.style.fontsize='20px';
        Errormsg.classList.add('errorstyle');
        // Errormsg.setAttribute.add('id',)
    }
    else{
        let Errormsg=document.getElementById('errormsg');
        Errormsg.innerHTML= "";
        TaskList.push(usertask.value);
        usertask.value="";
        console.log(TaskList);
        displayItems();

    }

}
 function displayItems()
 {  
    TaskContainer.innerHTML="";
    TaskList.forEach((element,index)=>{
        let listelement=document.createElement("li");
        listelement.innerHTML=element;
        TaskContainer.appendChild(listelement);

        //buttton element is created
        let delbtn=document.createElement('button');
        delbtn.textContent="Delete";
        delbtn.onclick=function(){
            TaskList.splice(index,1);
            displayItems();
        }
        TaskContainer.appendChild(delbtn);
    })
}
    
    
    

    


    
    
    

    
