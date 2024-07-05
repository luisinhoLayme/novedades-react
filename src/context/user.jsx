import { createContext, useState, useCallback } from "react"

export const UserContext = createContext({ name: null, isLogged: false })

export const UseContextProvider = ({ children }) => {
  const [ name, setName ] = useState(null)
  const [ isLogged, setIsLogged ] = useState(false)

  const updateUser = useCallback(({ name, isLogged }) => {
    setName( name )
    setIsLogged(isLogged)
  }, [])

  return (
    <UserContext value={{ name, isLogged, updateUser }}>
      { children }
    </UserContext>
  )
}
