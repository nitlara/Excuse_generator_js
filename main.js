let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


function generador (who,action,what,when){
    whoA = Math.floor(Math.random()* who.length);
    actionA = Math.floor(Math.random()* action.length);
    whatA = Math.floor(Math.random()* what.length);
    whenA = Math.floor(Math.random()* when.length);
    return who[whoA] + " " + action[actionA] + " " + what[whatA] + " " + when[whenA];
}


function onLoad(){
    
    var newphrase = document.getElementById('excusa');
    newphrase.innerHTML = generador(who, action, what, when);
}

window.onload = onLoad;
