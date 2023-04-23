import '../../Lista/Lista.scss'

export default function Item({tarefa, tempo}) {
    return (
        <li className="item">
            <h3>{tarefa}</h3>
            <div>{tempo}</div>
        </li>
    )
}