import React, { useState } from 'react'
import './Formulario.scss'
import Botao from '../Botao.js/Botao'
import {v4 as uuidv4} from 'uuid'

export default function Formulario({setTarefas, tarefas}) {

  const [novaTarefa, setNovaTarefa] = useState([])

  const adicionarTarefa = (valor) => {
    valor.preventDefault()
    setTarefas(estadoAtual => [...estadoAtual, //Quebro o array de objetos para passar novas propriedades/valores para ele, os novos valores devem estar em um objeto, pois conterão mais propriedades.
      {
        ...novaTarefa, //Quebro o objeto que contém os valores preenchidos pelo usuário nos campos, para passar novas prpriedades para ele.
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ])
    
    setNovaTarefa({
      tarefa: "",
      tempo: "00:00"
    })

  }

  return (
    <form className="novaTarefa" onSubmit={adicionarTarefa}>
      <div className="inputContainer">
        <label>Adicione um novo estudo</label>
        <input
          type="text"
          value={novaTarefa.tarefa} //Digo que o valor do input, será o state na propriedade tarefa(criada agora).
          onChange={valor => setNovaTarefa({...novaTarefa, tarefa: valor.target.value})} //Valor preenchido pelo usuário passará para propriedade tarefa, que será agrupada no state novaTarefa. 
          placeholder="Quer estudar o que?"
          required
        />
      </div>
      <div className="inputContainer">
        <label >Tempo</label>
        <input
          type="time"
          value={novaTarefa.tempo}
          onChange={valor => setNovaTarefa({...novaTarefa, tempo: valor.target.value})}
          step="1"
          required
        />
      </div>
      <Botao
        type="submit" 
        texto="Adicionar"
      />
    </form>
  );
}
