import React from 'react'
import Image from 'next/image'

const ArrivalProduct = ({ImageUrl, Title}) => {
  return (
    <div className='ml-9 xl:m-0'>
        <Image alt='image' src={ImageUrl}/>
        <h3 className='text-[#3C4242] font-causten font-bold text-[20px] tracking-[1px] mt-[32px]'>{Title}</h3>
    </div>
  )
}

export default ArrivalProduct
