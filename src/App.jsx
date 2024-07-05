import { useState, use } from 'react'
import { preload } from 'react-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { version } from 'react'
import { Title } from './components/Title'
import { CargarEstilos } from './components/CargarEstilos'
import { PropRef } from './components/PropRef'
import { UseFetchExample } from './use/useExample'
import { UseContextProvider, UserContext } from './context/user'
import { UseContextExample } from './use/UseContextExample'
import { Actions } from './use/Actions'
import { UseOptimistcExample } from './use/UseOptimistcExample'


function App() {
  const [ show, setShow ] = useState(false)
  const { isLogged } = use(UserContext)

  preload('src/css/pico.min.css', {
    as: 'style',
    priority: 'low'
  })

  return (
    <>
      <Title version={ version } />

      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h2>React 19</h2>
        <small style={{ color: 'greenyellow' }}>React { version }</small>
      </div>

      <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <CargarEstilos /> }

      {/* <PropRef /> */}
      {/* <UseFetchExample /> */}
      {/* <UseContextExample /> */}
      {/* <Actions /> */}
      <UseOptimistcExample />
      <footer>{ isLogged ? 'Logged' : 'Not Logged' }</footer>
    </>
  )
}

export default App
