export const updateName = (name) => {
  // simula un peticion
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.length < 3) {
        resolve('El nombre debe tener al menor 3 caracteres')
        return
      }

      resolve()
    }, 3000)
  })
}

export const getDate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: 'ok'
      })
    }, 2000)
  })
}

