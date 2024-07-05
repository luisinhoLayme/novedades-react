import { useRef } from "react"

const Input = ({ ref }) => {
  return <input ref={ ref } placeholder="luisinho" type="text" />
}


export const PropRef = () => {
  const inputRef = useRef()

  const focusInput = () => {
    if ( inputRef.current ) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <link rel="stylesheet" href="src/pico-main/css/pico.min.css" />

      <form action="">
        <Input ref={ inputRef } />
      </form>

      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}
