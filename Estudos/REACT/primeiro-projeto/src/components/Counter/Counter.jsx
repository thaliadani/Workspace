import { useState } from 'react';

export function Counter() {
    const [contador, setContador] = useState(0);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 
            style={{fontSize: '8rem'}}>
            {contador}
            </h1>

            <div style={{display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center'}}>
                
                <button style={{fontSize: '3rem'}} 
                onClick={() => setContador(contador - 1)}>-</button>
                
                <button style={{fontSize: '3rem'}} 
                onClick={() => setContador(contador + 1)}>+</button>
            </div>

            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
                
                <input type='text' placeholder='Nome' 
                value={name} 
                onChange={(event) => setName(event.target.value)}/>
                
                <input type='password' placeholder='Senha' value={password} 
                onChange={(event) => setPassword(event.target.value)}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
}
