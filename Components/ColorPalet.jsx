import React from 'react'

const ColorPalet = ({Color,Name}) => {
  return (
    <div className='w-[36px] h-[70px]'>
      <div className={`w-[36px] h-[36px] rounded-[12px] shadow-xl ${Color}`}></div>
      <h4 className='text-[#8A8989] text-[14px] font-semibold font-causten mt-[18px]'>{Name}</h4>
    </div>
  )
}

export default ColorPalet
