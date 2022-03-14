import { useState } from 'react';

function Contar() {
    return (
    <span>
        <Contador /> 
        <br/>
    </span>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function addContador() {
        setContador(contador + 1);
    }
    
    function lessContador() {
        setContador(contador - 1);
    }

    return (
        <span>
            <button onClick={lessContador}>[ - ]</button>
            <span>___{contador}___</span>
            <button onClick={addContador}> [ + ]</button>          
        </span>
    )
} 

export default Contar