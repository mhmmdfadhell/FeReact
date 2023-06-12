import React from 'react'

function Text() {
    return <h1 className ="text-5xl font-bold text-center">HAIII TOT!</h1>
}
const Button = (props) =>{
  const{text="well"} = props;//deafaul text
  return  <button className={`h-10 px-6 font-semibold rounded-md ${props.color} text-gray-100`}>{text}</button>
}


export default function Component() {
  return (
    <>
    <div className="flex justify-center  items-center mb-10">
      <h1 className ="text-5xl font-bold text-center">HAII DOGGG!!!</h1>
    </div>
    <div className="flex justify-center items-center gap-x-5">
      <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-gray-100  "> Sentuh Aku </button>
      <button className="h-10 px-6 font-semibold rounded-md bg-orange-600 text-black  "> Sentuh Aku </button>
      <Button color = "bg-pink-500"/>
      <Button color = "bg-purple-500"/>
    </div>
    <div>
        <Text/>
    </div>
    </>
  )
}
