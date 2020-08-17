var arraynme =[ ]

submit=()=>{
  
    
    let inputdata =document.getElementById("input-field").value;
    if (inputdata){
      arraynme.push(inputdata)
    let div=document.createElement("div")
    div.id=inputdata;
    console.log(arraynme,arraynme.length)
    div.style.fontSize ="50px";
    div.style.marginTop="15px";
    div.style.borderBottom="1px solid black";
    div.style.boxShadow= "lightgrey 44px 5px 14px 18px";
    div.style.paddingLeft="1.5%";
    
    var x=document.createElement("INPUT"); 
    x.id=inputdata+"1"
    x.setAttribute("type","checkbox");
    x.style.height="23px";
    x.style.width="25px";
    x.addEventListener("click", function () {
        strik(inputdata+"1","xyz"+inputdata);
      })
    div.appendChild(x); 
    
    let sp=document.createElement("Input")
    sp.style.marginTop="15px";
    sp.style.border="none";
    sp.style.fontSize="35px"
    sp.value=inputdata;
    sp.readOnly=true;
    sp.style.outline="none";
    sp.id="xyz"+inputdata;
    sp.addEventListener("keydown",function(){
      entre("xyz"+inputdata,event);
    })
    div.appendChild(sp); 
    div.style.position="relative";

    //<i class="fas fa-pencil-alt"></i>
    let E=document.createElement("i")
    E.className="fas fa-pencil-alt";
    E.style.position="absolute";
    E.style.right="6%";
    E.style.fontSize="30px"
    E.style.bottom="10%";
    E.title="Click to edit the task";
    E.style.cursor="pointer";
    E.addEventListener("click", function () {
        editTask("xyz"+inputdata);
      });
    div.appendChild(E);

    //<i class="far fa-trash-alt"></i>
    let y=document.createElement("i")             
    y.className="far fa-trash-alt";
    y.style.position="absolute";
     y.style.right="10%";
     y.style.fontSize="30px"
     y.style.bottom="10%";
     y.style.cursor="pointer";
     y.title="Click to delete the task"
     y.addEventListener("click", function () {
        deleteTask(inputdata,"xyz"+inputdata);
      });
     div.appendChild(y);
     let z=document.createElement("i")
     z.className="far fa-paper-plane";
     z.style.position="absolute";
     z.style.right="14%";
     z.style.fontSize="30px"
     z.style.bottom="10%";
     z.style.cursor="pointer";
     z.title="Click to Enter";
     div.appendChild(z);

     document.body.appendChild(div);
     document.getElementById("input-field").value="";
 
  
    document.getElementById("para").style.opacity="0";
  }    
}




strik=(checkboxId,i)=>{
   let incheck=document.getElementById(checkboxId)
    if(incheck.checked){
        document.getElementById(i).style.textDecoration = "line-through"; 
    }
    else{
        document.getElementById(i).style.textDecoration = "none";
    }
    }



function onClickMenu() {
    document.getElementById("navbar").style.width = "250px";
  }
function closeNav() {
    document.getElementById("navbar").style.width = "0px";
  }



  deleteTask=(id,inputId)=>{
  var r=confirm("Click on OK to delete the task");
  if(r===true){
  let index=arraynme.findIndex(eachlst=>eachlst===document.getElementById(inputId).value);
  console.log(index,arraynme,document.getElementById(inputId))
  if(index>=0){
      arraynme.splice(index,1)
    }
    if(arraynme.length===0){
      document.getElementById("para").style.opacity="1";
    }
    document.getElementById(id).remove();
  }
  }



  editTask=(id)=>{
    let editId= document.getElementById(id)
    console.log(editId,id,)
editId.readOnly=false;
editId.focus()
}

entre=(id,event)=>{
  console.log(id,event,event.key)
  if(event.keyCode===13){
  document.getElementById(id).readOnly=true;

  }
}

  
  enter=(event)=>{
  if(event.keyCode===13){
    console.log(event.keyCode);
submit();
  }
    console.log(event.keyCode);
  }

  out=()=>{
    var r=confirm("Are you sure want to log out ?");
   if (r===true){
    window.location.href = "signin.html";
   
     alert("Succesfully logged out...")
   }
  }
  





