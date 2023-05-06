import React from 'react'

function Lists({ index, close, prediction }) {
  return (
    <div
      className={
        index % 2 != 0
          ? 'flex w-[100%] items-center  bg-gray-200 shadow-md shadow-slate-300  '
          : 'flex w-[100%] items-center  bg-white shadow-md shadow-slate-300 '
      }
    >
      <p className=" w-[20%] border-[0.1rem] border-slate-300 py-4  px-4 text-left font-serif text-[1.3rem] font-medium text-slate-700 md:text-[1.6rem] ">
        {index}
      </p>
      <p className=" w-[40%] border-[0.1rem] border-slate-300 py-4  px-4 text-left font-serif text-[1.2rem] font-medium tracking-wide text-slate-700 md:text-[1.6rem] ">
        {close}
      </p>
      <p className=" w-[40%] border-[0.1rem] border-slate-300 py-4  px-4 text-left font-serif text-[1.2rem] font-medium text-slate-700 md:text-[1.6rem] ">
        {prediction}
      </p>
    </div>
  )
}

export default Lists
