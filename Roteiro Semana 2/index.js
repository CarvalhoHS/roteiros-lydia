let texto = document.getElementById("meio")

function randomico(){

let chance = Math.random(0, 5)

if (chance < 1){
    texto.innerHTML = "Hungria"
}
else if (chance >= 1 && chance < 2){
    texto.innerHTML = "Eslovaquia"
}
else if (chance >= 2 && chance < 3){
    texto.innerHTML = "Tanzania"
}
else if (chance >= 3 && chance < 4){
    texto.innerHTML = "Singapura"
}
else if (chance >= 4 && chance < 5){
    texto.innerHTML = "Barbados"
}
}
