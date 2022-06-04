import React from 'react'
import user from '../images/user.png'

const CardKontak = ({ nama, nohp }) => {
  return (
    <div className='flex items-center p-5 border-2 border-slate-400 rounded-md'>
      <div className=''>
        <img src={user} alt="user"/>
      </div>
      <div className='ml-5 w-full'>
        <h3 className='font-bold text-xl text-slate-700'>{nama}</h3>
        <h4 className=' text-slate-400 text-sm'>Telp. {nohp}</h4>
      </div>
    </div>
  )
}

export default CardKontak