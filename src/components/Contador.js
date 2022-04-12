import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);
    
    return (
        <>
            <h2>Contador</h2>
            <button onClick={restar}>-1</button>
            <button onClick={sumar}>+1</button>
            <br/>
            <h2>{contador}</h2>
        </>
    );
}

export default Contador;