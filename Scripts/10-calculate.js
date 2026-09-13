let calculation = localStorage.getItem('calculation')||'';
function display(calculation,value){

    document.querySelector(".js-screen").innerHTML = `${calculation} = ${value}`
    localStorage.removeItem('calculation');

}

const numbtn = document.getElementById("num-btn");
numbtn.onclick = function(){
    localStorage.removeItem('calculation'); location.reload()
}

const calculatebtn = document.getElementById("calculate");

calculatebtn.onclick = function(){
    let value = eval(calculation);
    localStorage.setItem('calculation',calculation);
    display(localStorage.getItem('calculation') , value);
}