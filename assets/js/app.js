 let mass = +prompt('Масса(кг)');
 let higth = +prompt('Рост(м)');
 

 let index = mass / ( higth ** 2 );
 if( index <= 16){
 alert('Выраженный дефицит массы тела')
}else if( (index > 16) && (index <= 18.5) ){
    alert('Недостаточная (дефицит) масса тела')
}else if ( (index > 18.5) && (index <= 25 ) ){
    alert('Норма')
}else if ( (index > 25) && (index <= 30 ) ){
    alert('Избыточная масса тела (предожирение)')
}else if ( (index > 30) && (index <= 35) ){
    alert('Ожирение 1 степени')
}else if ( (index > 35) && (index < 40) ){
    alert('Ожирение 2 степени')
}else if (index => 40){
    alert('Ожирение 3 степени')
}
console.log(index);



