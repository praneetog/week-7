import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('white')

  return (
    <div style={{backgroundColor: bgColor}} className='flex justify-center items-end h-screen w-full p-4'>
      <div className='flex bg-white p-2 rounded-full gap-4'>
        <button className='bg-black text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('black')}} >black</button>
        <button className='bg-yellow-300 text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('yellow')}} >yellow</button>
        <button className='bg-green-500 text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('green')}} >green</button>
        <button className="bg-red-600 text-white px-3 py-2 rounded-full" onClick={() => {setBgColor('red')}} >red</button>
        <button className='bg-blue-500 text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('blue')}} >blue</button>
        <button className='bg-pink-500 text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('pink')}} >pink</button>
        <button className='bg-gray-500 text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('gray')}} >grey</button>
        <button className='bg-purple-600 text-white px-3 py-2 rounded-full' onClick={() => {setBgColor('purple')}} >purple</button>
      </div>
    </div>
  )
}

export default App
