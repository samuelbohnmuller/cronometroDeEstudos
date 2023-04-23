import '../../Lista/Lista.scss'

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefas}) {
    return (
        <li className= //Recebe uma classe css item e recebe outra classe css itemSelecionado, se o atributo selecionado do objeto renderizado for igual a true, se não, não recebe a outra classe.
            {`
                ${"item"} 
                ${selecionado === true ? "itemSelecionado" : ''} 
                ${completado ? "itemCompletado" : ''} 
            `} 
            onClick={() => !completado && selecionaTarefas({tarefa, tempo, selecionado, completado, id})} //Passo para o state setSelecionado(chamado através da função selecionaTarefas) o objeto clicado. Função selecionaTarefas só é executada, caso o completado for false.
        >
            <h3>{tarefa}</h3>
            <div>{tempo}</div>
            {
                completado && //Caso o completado seja verdadeiro, executará o span, se não, retorna nada.
                    <span 
                        className='concluido' 
                        aria-label='Tarefa completada'
                    >
                    </span>  
            } 
        </li>
    )
}// 