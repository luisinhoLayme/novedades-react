export const Title = ({ version = 'react 19' }) => {
  return (
    <>
      {/* contenido dinamico en string */}
      <title>{`React ${ version } - title`}</title>
      <meta name="description" content="react 19" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </>
  )
}
