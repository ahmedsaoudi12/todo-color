
//colers
document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll("button").forEach(function(ahmed){
     ahmed.onclick = function (event){
          document.querySelector("#result").style.color = ahmed.dataset.color;
        

     }
    })
})

// list

function workCount(){
    var works  = document.querySelector("#works").value;
    var result = document.querySelector("#list");

    if(works==""){
        return false;
    }
    else{
        var myLi = document.createElement("li");
        myLi.innerHTML = works;
        result.append(myLi);
        document.querySelector("#works").value="";
        return false;

    }
    
}

