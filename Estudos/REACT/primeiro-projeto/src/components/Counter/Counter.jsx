import { useState } from 'react';

export function Counter() {
    const [contador, setContador] = useState(0);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontSize: '8rem'}}>{contador}</h1>

            <div style={{display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center'}}>
                <button style={{fontSize: '3rem'}} onClick={() => setContador(contador - 1)}>-</button>
                <button style={{fontSize: '3rem'}} onClick={() => setContador(contador + 1)}>+</button>
            </div>
        </div>
    );
}
