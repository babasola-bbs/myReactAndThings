import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
try{    
    e.preventDefault();
    let colors = new Values(color).all(10)
    setList(colors)
  }
  catch(error){
    setError(true)
  }

  }


  

  return (
    <React.Fragment>
      <section className='container'>
        <h3>colour generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={() => setColor(e.target.value)} placeholder='#f15025' className={`${error ? 'error' : null}`}/>
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </React.Fragment>
    )
}

export default App
