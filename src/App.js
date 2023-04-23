import React, { useState } from "react";
import "./App.css";
import Formulario from "./Componentes/Formulario/Formulario";
import Lista from "./Componentes/Lista/Lista";
import "./style.scss";
import Cronometro from "./Componentes/Cronometro/Cronometro";

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [selecionado, setSelecionado] = useState();

  function selecionaTarefas(tarefaSelecionada){
    setSelecionado(tarefaSelecionada)
    setTarefas(estadoAtual => estadoAtual.map(tarefa => ( //Itero em cada tarefa no state, acrescentando coisas dentro de {} para cada tarefa.
      {
        ...tarefa, 
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false //Se o id da tarefa do estado atual(tarefa) do state tarefas, for igual ao item com id que o usuário clicou, o atributo selecionado da tarefa recebe true, se não, false.
      }
    )))
  }

  function finalizarTarefa(){
    if(selecionado){ //Item clicado, somente um, pois selecionado não é array e contém um objeto só.
      setSelecionado(undefined) //Para que não haja nenhuma tarefa selecionada(em cinza escuro).
      setTarefas(estadoAtual => estadoAtual.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false, //Pois já foi completado.
            completado: true //Troco o valor do atributo.
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className="AppStyle">
      <Formulario
        setTarefas={setTarefas}
        tarefas={tarefas}
      />
      <Lista 
        tarefas={tarefas}
        selecionaTarefas={selecionaTarefas}
      />
      <Cronometro
        selecionado={selecionado} //state selecionado contém o item(tarefa) selecionada pelo usuário.
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
