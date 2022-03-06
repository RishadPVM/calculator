function but_click(val){
    document.getElementById("display").value+=val
}
function clear_display(){
    document.getElementById("display").value="0"
}
function equalClick(){
    var text= document.getElementById('display').value
    var result= eval(text)
    document.getElementById('display').value=result
}
