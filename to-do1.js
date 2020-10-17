//document.write("My ToDo List");
var self =this;
function ToDo(){
  self.listInterface = document.createElement("div");
  self.listInterface.setAttribute("class","list-interface");
  self.header = document.createElement("h2");
  self.header.setAttribute("class","header");
  self.header.innerHTML = "My ToDo List";
  self.listInterface.appendChild(self.header);
  self.inputBox = document.createElement("input");
  self.inputBox.setAttribute("type", "text");
  self.inputBox.setAttribute("class", "input-box");
  self.inputBox.setAttribute("placeholder", "Type your activity here");
  self.addList= document.createElement("button");
  self.addList.setAttribute("class","add-list");
  

  self.addList.innerHTML = "Add";
  self.listInterface.appendChild(self.inputBox);
  self.listInterface.appendChild(self.addList);
  document.body.appendChild(self.listInterface);
  function CreateToDo(){
    self.boxInterface = document.createElement("div");
    self.listBox= document.createElement("div");
    self.listBox.setAttribute("class","list-box");
    self.checkBox = document.createElement("input");
    self.checkBox.setAttribute("type","checkbox");
    self.checkBox.setAttribute("class","check-box");
    var message = self.inputBox.value;
    self.listSpan = document.createElement("span");
    self.listSpan.setAttribute("class","list-span");
    self.listSpan.innerHTML =message;
    //self.listSpan.style.backgroundColor ='blue';
    self.clearButton= document.createElement("button");
    self.clearButton.setAttribute("class","clear-button");
    self.clearButton.innerHTML= "Clear";
    
    //self.clearButton.setAttribute("")
   
    
    self.listBox.appendChild(self.checkBox);
    self.listBox.appendChild(self.listSpan);
    self.listBox.appendChild(self.clearButton);
    self.boxInterface.appendChild(self.listBox);
    self.listInterface.appendChild(self.boxInterface);
    
    
    self.clearButton.addEventListener("click", function(){
      self.listBox.style.display="none";
    })
    
    
  }
 
  self.removeList = document.createElement("button");
  self.removeList.setAttribute("class", "remove-list");
  self.removeList.innerHTML ="Clear All"
 // self.listInterface.appendChild(self.removeList);
  self.removeList.addEventListener("click",function(){
    self.boxInterface.style.display= "none";
    });
  self.addList.addEventListener("click",CreateToDo);
 
}
var toDo1= new ToDo();