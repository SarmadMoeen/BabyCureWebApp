

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Radio } from 'antd'

const LetAddBaby = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [value, setGender] = useState('girl')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const handleAddBaby = () => {
    axios.post('http://localhost:3000/Babies', {
      name,
      date,
      value,
      weight,
      height
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }



  return (
    <>
     <header className='d-flex  py-3 px-3 justify-content-between' style={{backgroundColor:'#7E4DA7'}} >
        <div>
            <h3 className='text-white' style={{letterSpacing:'8px'}} >LOGO</h3>
        </div>
        <div>

        </div>
     </header>
     <section style={{backgroundColor:'#D2AEFF'}} >
     <div className='container-fluid'>
        <div className='row'>
             <div className='col-md-6'>
                <div>

                     <h3 className='pt-4 text-center pb-4' >Let's add a baby!</h3>

                     <div className='p-4' style={{backgroundColor:'#7E4DA7',border:'3px solid #000'}}>
                        <div className='row'>
                            <div className='col-md-12 pt-3'>
                                <div>
                                <input
                                      placeholder='Name'
                                      className='form-control let_baby_search text-white'
                                      type='text'
                                      value={name}
                                      onChange={e => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 pt-3 text-white'>
                            <div>
                            <input
                                  placeholder='Date of Birth'
                                  className='form-control let_baby_search text-white'
                                  type='date'
                                  value={date}
                                  onChange={e => setDate(e.target.value)}
                                />
                                </div>
                            </div>

                            <div className='col-md-12 pt-3'>
                              <label className='text-white' htmlFor='gender'>
                                Gender:
                              </label>
                              <Radio.Group
                                id='gender'
                                value={value}
                                onChange={e => setGender(e.target.value)}
                              >
                                <Radio value='boy'>Boy</Radio>
                                <Radio value='girl'>Girl</Radio>
                                <Radio value='other'>Other</Radio>
                              </Radio.Group>
                            </div>
                           <div className='col-md-6 pt-3'>
                           <input
                                placeholder='Weight( kg)'
                                type='text'
                                className='from-control text-white let_baby_search'
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                              />
                           </div>
                           <div className='col-md-6 pt-3'>
                           <input
                                placeholder='Height (cm)'
                                type='text'
                                className='from-control text-white let_baby_search'
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                              />
                           </div>
                           <div className='col-md-12 text-center pt-5 rounded-3'>
                             <Link to="/home" ><button onClick={handleAddBaby} style={{backgroundColor:'#CFACFB',fontWeight:'700'}} className='btn px-4'>Add Baby</button></Link> 
                           </div>
                           <div className='col-md-12 text-end'>
                               <Link to="/home" style={{color:'red'}}
                                >Skip for Now</Link>
                           </div>
                        </div>
                     </div>
                </div>    
             </div>
             <div className='col-md-6 text-end'> 
                <div className=''>
                    <img  src={require('../../assets/image/baby.png')} alt=''   />
                </div>
             </div>
        </div>
    </div>
     </section>
     <footer  className='py-3'  style={{backgroundColor:'#7E4DA7'}}>

     </footer>
    </>
  )
}

export default LetAddBaby

