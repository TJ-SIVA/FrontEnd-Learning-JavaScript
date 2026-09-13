const gamingbtn = document.getElementById("gaming");
const musicbtn = document.getElementById("music");
const techbtn = document.getElementById("tech");

techbtn.onclick = function(){

    techbtn.classList.add('is-toggled');
    gamingbtn.classList.remove('is-toggled');
    musicbtn.classList.remove('is-toggled');

}

musicbtn.onclick = function(){

    musicbtn.classList.add('is-toggled');
    gamingbtn.classList.remove('is-toggled');
    techbtn.classList.remove('is-toggled');
}

gamingbtn.onclick = function() {

    
    musicbtn.classList.remove('is-toggled');
    gamingbtn.classList.add('is-toggled');
    techbtn.classList.remove('is-toggled');
}

const value = document.getElementById("value");

function handleEvent(event){
    if(event.key == "Enter"){
        
        showValue();


    }
}
function showValue(){
        const price = Number(document.getElementById("price-input").value);
        if(price >= 0){

            const updatedPrice = ((price * 100) + 1000)/100;

            value.innerHTML = `$${updatedPrice}`;

        }

        else{

            value.classList.add('error-text')
            value.innerHTML = "Error : Cost Cannot Be less than $0"
        }


    }

