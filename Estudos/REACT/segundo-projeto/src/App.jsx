import { useState } from 'react'
import { Counter } from './components/Counter/Counter';
function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div>
      <h1>Ciclo de Vida no React</h1>

      <button onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'Ocultar' : 'Mostrar'}</button>

      {showCounter && <Counter />}
    </div>
  )
}

export default App
