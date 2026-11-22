import React from 'react'

function Input({label, type, placeholder, register}) {
  return (
    <div className='flex flex-col gap-1'>
        <label className='font-semibold capitalize'>{label}</label>
        <input type={type} placeholder={placeholder} required {...register(label)} className='px-3 py-2 border border-grey-300 rounded' />
    </div>
  )
}

export default Input