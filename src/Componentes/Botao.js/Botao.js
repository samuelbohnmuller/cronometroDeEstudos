import React from 'react'
import './Botao.scss'

export default function Botao({texto, type, clique}){
    return (
        <button 
            onClick={clique} 
            type={type} 
            className='botao'
        >
            {texto}
        </button>
    )
}