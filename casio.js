function showValue(value){
    document.getElementById("show").value+= value;
}
function tinh(){
    let input =document.getElementById("show").value;
    let result = eval(input);
    document.getElementById("show").value =result
}
function clearShow(){
document.getElementById("show").value=" "
}