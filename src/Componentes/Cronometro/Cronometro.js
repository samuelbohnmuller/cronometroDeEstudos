import React, { useEffect, useState } from 'react';
import Botao from '../Botao.js/Botao';
import './Cronometro.scss'
import './Relogio.scss'
import { tempoParaSegundos } from '../Tempo';

export default function Cronometro({selecionado, finalizarTarefa}) {

  const [tempo, setTempo] = useState(0)  

  useEffect(() => {
    if(selecionado?.tempo) { //Antes de preencher o formulário nas informações do tempo e tarefa, a propriedade tempo não existe no state selecionado, por isso que se usa o ?, caso seja undefined. O if será verdadeiro se a propriedade tempo tiver em selecionado.
      setTempo(tempoParaSegundos(selecionado.tempo)) //Seto no state tempo, o tempo(propriedade) em segundos, preenchido pelo usuário no input de tempo, que está no state selecionado, que contém o objeto clicado pelo usuário.
    }
  }, [selecionado]) //Sempre que selecionado mudar, executará o useEffect.

  const minutos = Math.floor(tempo / 60) //Arredondo o tempo para transformar em minutos, com valor arredondado.
  const segundos = tempo % 60
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0') //Transformando minutos em String, posso pegar cada posição do valor. Nesse caso, converto o valor em 2 posições. Coloco o valor sempre para 2, ou seja minutos sempre será 01 minuto, ou 55 minutos, nunca somente 1 minuto, mas 01 minutos e com valor 0 junto, exemplo 01.
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0')

  function contagemRegressiva(contador){
    setTimeout(() => {
      if(contador > 0){ //Em quando o tempo do cronômetro for maior que 0, ou seja, estiver correndo, vai ser tirado 1 segundo dele a cada segundo que passa.
        setTempo(contador -1)
        return contagemRegressiva(contador -1)
      }
      finalizarTarefa() //Se o cronômetro tiver zerado, tira o item de selecionado, colocando false e completado recebe true, mudando a cor do item para verde.
    }, 1000) //Em 1000 milesegundos essa função será executada.
  }

  return (
    <div className="cronometro">
      <p className="titulo">Escolha uma opção e inicie o cronômetro</p>
      <div className="relogioWrapper">
        <span className="relogioNumero">{minutoDezena}</span>
        <span className="relogioNumero">{minutoUnidade}</span>
        <span className="relogioDivisao">:</span>
        <span className="relogioNumero">{segundosDezena}</span>
        <span className="relogioNumero">{segundosUnidade}</span> 
      </div>
      <Botao
        clique={() => contagemRegressiva(tempo)}
        texto="Começar!"
        type="button"
      />
    </div>
  );
}
