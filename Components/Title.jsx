import React from 'react'

const Title = ({Name, className}) => {
  return (
    <div>
      <h2 className={`lg:text-[34px] text-[25px] text-[#3C4242] font-bold font-coresance leading-[33px] tracking-[1px] after:content[""] after:w-[8px] after:h-[30px] after:bg-[#8A33FD] after:absolute after:rounded-[10px] after:left-0 relative pl-[20px] ${className}`}>{Name}</h2>
    </div>
  )
}

export default Title
