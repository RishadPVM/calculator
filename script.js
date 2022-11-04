var myVar;


function but_click(val){
    document.getElementById("display").value+=val
}

function clear_display(){
    document.getElementById("display").value=" "
}
function equalClick(){
    var text= document.getElementById('display').value
    var result= eval(text)
    document.getElementById('display').value=result
    if (text= document.getElementById('display').value==123) {
       alert("Are you sure")
        window.location.href ="file.html";
    }
}

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
   