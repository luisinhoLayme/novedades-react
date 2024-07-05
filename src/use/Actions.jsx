import { useState, useTransition, useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { updateName } from '../utils'

const createAction = updateState => async (priviousState, formData) => {
  const name = formData.get('username')
  const error = await updateName(name)

  if (error) return error
  updateState(name)
  return null
}

export const Actions = () => {

  const [result, setResult] = useState(null)

  const updateNameAction = createAction(setResult)

  // const [ name, setName ] = useState('')
  // const [ error, setError ] = useState(null)
  // const [ isPending, startTransition ] = useTransition()
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //
  //   startTransition(async () => {
  //     const error = await updateName(name)
  //     if (error) {
  //       setError(error)
  //       setResult('')
  //     }else {
  //       setResult(name)
  //       setError(null)
  //     }
  //   })
  // }

  const [error, submitAction, isPending] = useActionState(updateNameAction)

  return (
    <>
      <form action={submitAction}>
        <input
          type="text"
          disabled={isPending}
          name="username"
          placeholder="Ej. Luisinho"
        />
        <Button />
        { error &&  <p style={{ color: 'red' }}>{error}</p>}

        {
          result && !error && <p style={{ color: 'lightgreen' }}>El nombre <strong>{result}</strong> se a actualizado</p>
        }
      </form>
    </>
  )
}

export const Button = () => {
  const { pending, data, method, action } = useFormStatus()

  return (
    <>
      <button type="submit" disabled={pending}>{pending ? 'Cargango...' : 'Actualizar'}</button>
    </>
  )
}
