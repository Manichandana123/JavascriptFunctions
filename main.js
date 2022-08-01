let name='Manichandana';
let template =`<h1>hiiii, ${name}`;

document.getElementById("heading").innerHTML=template;

function map(input,method){
    var map_array=[];
    for (let index = 0; index < input.length; index++) {
        let map_array = method(input[index]); 
        map_array[index]=mapelement;
    }
    return map_array;
}

function filter(input,method){
    var filter_array=[];
    for (let index = 0; index < input.length; index++) {
        let filterelement = method(input[index]); 
         if(method(input[index]))
        filter_array.push(input[index])
    }
    return filter_array;
}

function forEach(input,method){
    forEachResult=[];
    for (let index = 0; index < input.length; index++) {
        forEachelement=method(input[index]);
        forEachResult.push(forEachelement);
    }
    return forEachResult;
}
console.log("Map Function"+map([9,16,25,36],Math.sqrt));
console.log("For Each "+forEach([1,2,3,4],(x)=>{return x+5}));
console.log(" Filter "+filter([1,3,5,6],(x)=>{return x>5}))