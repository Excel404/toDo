
let listInterface = document.getElementById('list-interface');
listInterface.style.width = window.screen.innerWidth;
let hourElem = document.getElementById('input-hour');
let minuteElem = document.getElementById('input-minute');
let ClearAllBtn = document.getElementById('clearAll');
let inputBox = document.getElementById('input-box'); 
let message = inputBox.value;
let timeDivElem = document.getElementsByName('dayTime')
let boxInterface = document.createElement("div");
function CreateToDo(message,hour,minute){
  
  this.listBox= document.createElement("div");
  this.listBox.setAttribute("id","list-box");
  this.checkBox = document.createElement("input");
  this.checkBox.setAttribute("type","checkbox");
  this.checkBox.setAttribute("id","check-box");
  this.listSpan = document.createElement("span");
  this.listSpan.setAttribute("id","list-span");
  this.listSpan.innerHTML = message;
  this.time = document.createElement("span");
  this.time.setAttribute('class','time');
  //this.time.innerHTML = `(${hour}:${minute}${timeDivElem})`;
  this.clearButton = document.createElement("button");
  this.clearButton.setAttribute("class","clear-button");
  this.clearButton.innerHTML= "Clear";
  this.clearButton.onclick = ()=>{
    boxInterface.removeChild(this.listBox)
  }
  this.listBox.appendChild(this.checkBox);
  this.listBox.appendChild(this.listSpan);
  this.listBox.appendChild(this.time);
  this.listBox.appendChild(this.clearButton);
  boxInterface.appendChild(this.listBox);
  listInterface.appendChild(boxInterface);
  let checkAlarm =()=>{
    let setTime = new Date();    
    var currentHour = setTime.getHours();
    var currentMinute = setTime.getMinutes();
    var currentTime = currentHour*3600 + currentMinute*60;
    var setTime2 = hour*3600 + minute*60;
    var timeRem = setTime2 - currentTime;
    var timeRem1 = hour - currentHour;
    var timeRem2 = minute - currentMinute;
    if(hour!= 12){
      if(timeDivElem[0].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[0].value+' ';      
        if (setTime2==currentTime){
          
          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
          console.log(hour)
        }
      }else if(timeDivElem[1].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[1].value+' ';
        hour = parseInt(hourElem.value)+12;
        setTime2 = hour*3600 + minute*60;
        timeRem = setTime2 - currentTime;
        timeRem1 = hour - currentHour;
        timeRem2 = minute - currentMinute;
        if (setTime2==currentTime){
          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
          
        }
      }
    }else{
      if(timeDivElem[0].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[0].value+' ';
        hour = 0;
        setTime2 = hour*3600 + minute*60;
        timeRem = setTime2 - currentTime;
        timeRem2 = minute - currentMinute;
        timeRem1 = 24 - currentHour;
        if (setTime2==currentTime){
          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
      
        }
        
      }else if(timeDivElem[1].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[1].value+' ';      
        setTime2 = hour*3600 + minute*60;
        timeRem = setTime2 - currentTime;
        timeRem1 = hour - currentHour;
        timeRem2 = minute - currentMinute;
        if (setTime2==currentTime){
          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
      
        }
      }
    }
    
  }
  checkAlarm();
  function alarmRing(){
    navigator.vibrate([800,200,800,200,800,200,800,200,800,300,800]);
    alert(message);
  
  }
}
ClearAllBtn.onclick = ()=>{
  listInterface.removeChild(boxInterface)
}
console.log(localStorage)
