console.log("hola mundo!")

const input_number= document.getElementById("inputNumber")

function acctionButon(){
    
    let x= input_number.value

    if(x==0){
        console.log("x es igual a 0")
    }
    else{
        console.log("x no es igual a 0")
    }
}