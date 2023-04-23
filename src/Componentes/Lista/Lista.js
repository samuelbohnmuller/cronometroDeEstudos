import React from "react";
import "./Lista.scss";
import Item from "./Item/Item";

export default function Lista({tarefas, selecionaTarefas}) {
  
  return (
    <div className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
         {tarefas.map((tarefa) => (
            <Item 
              key={tarefa.id}
              {...tarefa} //Passando todas as propriedades separadamente do state tarefas.
              selecionaTarefas={selecionaTarefas}
            />  
          ))} 
      </ul>
    </div>
  );
}


