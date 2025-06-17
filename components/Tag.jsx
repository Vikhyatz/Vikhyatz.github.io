import React from 'react'

export function Tag({name}) {
  return (
    <span className="rounded-4xl transition-all duration-100 bg-[#111D2E] text-[#4493f8] hover:bg-[#1F6FEB] hover:text-white px-3 py-1 text-sm sm:text-base md:text-[18px] ml-2 sm:ml-4 cursor-pointer">{name}</span>
  )
}
