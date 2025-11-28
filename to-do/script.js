const inputBox= document.querySelector("#input-box");
const listtasks = document.querySelector("#listconatiner");

function addTask(){
    if(inputBox.value == ''){
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerText= inputBox.value;
        listtasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


listtasks.addEventListener("click",function(evt){
    if(evt.target.tagName==="LI"){
        evt.target.classList.toggle("checked");
        saveData();
    }
    else if(evt.target.tagName==="SPAN"){
        evt.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data", listconatiner.innerHTML);
}


function showTasks(){
    listconatiner.innerHTML= localStorage.getItem("data");
}
showTasks();