const botoes = document.querySelectorAll(".botao");
const conteudo_texto = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length; i++){
    botoes[i].onclick= function(){
        for(let j = 0; j <botoes.length; j++){
            botoes[j].classList.remove("ativo");
            conteudo_texto[j].classList.remove("ativo");

        }

        botoes[i].classList.add("ativo");
        conteudo_texto[i].classList.add("ativo");

     
}
}

const contadores = document.querySelectorAll('.contador')
const tempoObjetivo1 = new Date("2024-08-27T00:00:00")
const tempoObjetivo2 = new Date("2023-02-02T00:00:00")
const tempoObjetivo3 = new Date("2024-06-30T00:00:00")
const tempoObjetivo4 = new Date("2022-04-04T00:00:00")

tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]




function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date()
    let tempoFinal = tempoObjetivo - tempoAtual
    let segundos =Math.floor( tempoFinal/1000)
    let minutos = Math.floor(segundos/60)
    let horas = Math.floor(minutos/60)
    let dia = Math.floor(horas/24)
    segundos %= 60
    minutos %= 60
    horas %= 24
    if(tempoFinal > 0){
    return [dia,horas,minutos,segundos]
        }
    else{
        return [0,0,0,0]
    }
    }

function atualizaCronometro(){
    for(let i=0;i<contadores.length;i++){
        document.getElementById("dias" +i).textContent = calculaTempo(tempos[i])[0]
        document.getElementById("horas" +i).textContent = calculaTempo(tempos[i])[1]
        document.getElementById("minutos" +i).textContent = calculaTempo(tempos[i])[2]
        document.getElementById("seg" +i).textContent = calculaTempo(tempos[i])[3]
      
}}

function startCronometro(){
atualizaCronometro()
setInterval(atualizaCronometro,1000)
}

startCronometro()



/*
const num = document.querySelectorAll('.numero')
    num[1].classList.remove('impar')
    num[1].classList.add('par')
    */