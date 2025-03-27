// Recupero e dichiarazione variabili

const image = document.querySelector('img')
const button = document.getElementById('on-off')


button.addEventListener('click', function(){

    if(image.src.includes('yellow')){
        image.src='./img/white_lamp.png'
        button.innerText='Accendi'
    }
    else{
        image.src='./img/yellow_lamp.png'
        button.innerText='Spegni'
    }
    // image.src="./img/yellow_lamp.png"
})