import { useOptimistic, useState, useRef } from 'react'

const deliverMessage = async (message) => {
  await new Promise((res, rej) => setTimeout(res, 1000))
  return message
}

export const UseOptimistcExample = () => {
  const [messages, setMessages] = useState([
    { text: 'Hola', sending: false, key: 1 }
  ])

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true
    }
  ])

  const formAction = async (formData) => {
    addOptimisticMessage(formData.get('message'))

    try {
      const sentMessage = await deliverMessage(formData.get('message'))
      setMessages((messages) => [...messages, { text: sentMessage }])
    } catch (err) {
      // mostrar error
      setMessages(messages)
    }
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small>(Enviando...)</small>}
        </div>
      ))}

      <form action={formAction}>
        <input type="text" name="message" placeholder="Hello" />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
