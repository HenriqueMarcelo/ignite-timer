import { createContext, useContext, useState } from 'react'

// Crio um contexto com os valores iniciais
const CyclesContext = createContext({} as any)

function NewCycleForm() {
  // utilizando a função useContext eu consigo acessar a informação do contexto
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      New Cycle Form: {activeCycle}{' '}
      <button onClick={() => setActiveCycle(activeCycle + 1)}>Mudar</button>
    </h1>
  )
}

function Countdown() {
  // utilizando a função useContext eu consigo acessar a informação do contexto
  const { activeCycle } = useContext(CyclesContext)

  return <h1>Countdown: {activeCycle}</h1>
}

export function ContextExample() {
  const [activeCycle, setActiveCycle] = useState(0)

  // Dentro desse contexto eu passo um estado e a função de set
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
