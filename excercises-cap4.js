let ej1 = "Ejercicio 1";
let ej2 = "Ejercicio 2";
let ej3 = "Ejercicio 3";
let brinco = " \n "

console.log(ej1)

let range = function(a,b,c){

    let arrayRange = [];

    if (a<b){
       b = b+1;
       for(a ; a<b; a++){
           if ( a%c !== 0 || c == 1){
           arrayRange.push(a);}
       }
    }

    else if (a>b) {
        b = b-1;
        for(a ; a>b; a--){
            if ( a%c !== 0 || c == -1){
                arrayRange.push(a);}
        }
    }

     else { console.log ("error")}

     return arrayRange;
}

console.log(range(5,2,-1))

const sum = function(arr){

    let sumeitor = 0;
    
for(let count = 0; count<arr.length; count++){
    sumeitor = arr[count]+sumeitor;
}
return sumeitor
}

console.log(sum(range(1,10)));

console.log(brinco)
console.log(ej2)




const reverseArray = function(arr){
    let newarr= []

    for(let count=0;arr.length>0;count++){
        newarr.push(arr.pop())
    }

    return newarr;
}

console.log(reverseArray(["A","B","C","D"]))



const reverseArrayInPlace = function(letArr){
        let newarr= []
    
        for(let count=0;letArr.length>0;count++){
            newarr.push(letArr.pop())
        }

        for(let count=0;count<newarr.length;count++){
            letArr.push(newarr[count])
        }
    }
    
   let bombastic = [1, 2, 3, 4, 5];
   reverseArrayInPlace(bombastic);
   console.log(bombastic);


console.log(brinco)
console.log(ej3)


const arrayToList = function(arre){
let lista 
    for(let count = 0; count<(arre.length-1); count++){
        let co = arre.length-count-1;
    

       if(co == (arre.length-1)) {
        lista = {value: arre[co], rest: null};
        lista = {value: arre[co-1], rest: lista};
         }  
         
        else { lista = {value: arre[co-1], rest: lista};}
}  return lista;
}
console.log(arrayToList([60,70,80,90]));


const listToArray = function(lest){
    let arrian = [];
    for (let node = lest; node; node = node.rest) {
      arrian.push(node.value)  
    }
    return arrian
}

console.log(listToArray(arrayToList([60,70,80,90]))) 



let prepend = function(v,r){
    let lista
    if(v){lista={value:v , rest: r}}
    return lista
}

console.log(prepend(10,(prepend(20,null))));

