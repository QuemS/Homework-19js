let years = +prompt('Введите год');

if( years % 4 == 0 && (years % 100 !== 0 || years % 400 === 0)){
    alert(`${years} год высокосный`)
}else{
    alert(`${years} год не высокосный`)
}
