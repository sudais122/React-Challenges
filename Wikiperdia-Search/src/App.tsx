import React, { useRef, useState } from 'react'

const App = () => {

  const [isvasible, setisvasible] = useState<boolean>(true);


  return (
    <>
      <button onClick={() => setisvasible(v => !v)}>{isvasible ? 'hide' : 'show'}</button>
      {
        isvasible && <div
          style={{
            width: '100px',
            height: '100px',
            padding: '1rem',
            background: 'yellow',
            border: '1px solid black',
          }}
        >
        </div>
      }
    </>
  )
}

export default App