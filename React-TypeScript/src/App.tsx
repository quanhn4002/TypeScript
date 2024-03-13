import React from 'react'
import './App.css'
import Home from './pages/home'

function App() {
  console.log(typeof React.createElement('div', { className: 'app' }, React.createElement('h1', {}, 'Hello, World!')))

  // const addProduct = () => {
  //   console.log('Them thanh cong!')
  // }
  return (
    <>
      {/* <div className='app'>
        <h1>Hello, World!</h1>
        <button onClick={() => addProduct()}>Click Me</button>
      </div> */}
      <Home />
    </>
  )
}

export default App
