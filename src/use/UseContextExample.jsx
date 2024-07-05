import { use } from 'react'
import { UserContext } from "../context/user"

export const UseContextExample = () => {
  const { name, isLogged, updateUser } = use(UserContext)
  return (
    <>
      {
        isLogged
          ? (
            <>
              <p>Hola {name}</p>
              <button onClick={() => updateUser({ name: null, isLogged: false })}>Cerrar Sesion</button>
            </>
          )
          : (
            <>
              <p>Bienvenido</p>
              <button onClick={() => updateUser({ name: 'Luisinho', isLogged: true })}>Iniciar Sesion</button>
            </>
          )
      }
    </>
  )
}
