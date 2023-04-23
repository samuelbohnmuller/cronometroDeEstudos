export function tempoParaSegundos(tempo){
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":") //Separa a variável pega na chamada da função e divide por : , transformando em um array de horas, minutos e segundos. Se horas, ou minutos for vazio, o padrão é 0.

    const horasEmSegundos = Number(horas) * 3600 //Pego o atributo horas do array acima e transformo ele de string para Number e multiplico por 3600(pois 1 hora tem 3.600 segundos).
    const minutosEmSegundos = Number(minutos) * 60
    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}