

const input_number= document.getElementById("inputNumber")

/* function acctionButon(){
    
    let x= input_number.value
    
    if(x==0){
        console.log("x es igual a 0")
    }
    else if(x==1){
        console.log("x es 1")
    }
    else{
        console.log("x es otro numero")
    }
    
    switch(x){
        case "1":
            console.log("x es 1")
            break
            case "2":
                console.log("x es 2")
                break
                case "3":
                    console.log("x es 3")
                    break
                    default:
                        console.log("x es otro numero")
                    }
                    
                    
} */


let count=0
function acctionButon(){
    const div=document.getElementById("div")
    let nodo=document.createElement("p")
    nodo.innerHTML="soy el parrafo "+count
    div.append(nodo)
    count++
}

function borrarNodo(){
    const div=document.getElementById("div")
    let node=div.firstElementChild
    node.remove()
    count--
}

let arr=["amarillo","azul","blanco","nanranja"]


arr.push("verde")

for (let i=0; i<arr.length; i++){
    console.log("el color es: " +arr[i])
}

arr.pop()

console.log("--------------------------------------------")
for (let i=0; i<arr.length; i++){
    console.log("el color es: " +arr[i])
}


let persona={
    name:"pepe",
    age:20,
    comidas:["pizza","lonche","pasta"],
    print_name:function(){
        console.log("hola mi nombre es: "+this.name)
    }
}

console.log(persona.comidas[1])
persona.print_name()


/*
for(let i=0; i<5; i++){
    
    console.log("el numero es: "+i+" dentro del for")
}

let i=0;

while(i<5){
    console.log("el numero es: "+i+" dentro del while")
    i++
}
*/