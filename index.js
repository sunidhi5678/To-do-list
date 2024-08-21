const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write someting!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e,target.tagName === "LI"){
        e.tagName.classList.toggle("checked");
        saveData();
        deleteData();
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    deleteData();
    }

},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
function deleteData(){
    listContainer.innerHTML = localStorage.removeItem("data");
}
