import React from 'react'
import InputForm from '../../molecules/InputForm'
import  Button  from '../../atom/Button'

export default function Register() {
  return (

    <form action="" className="w-full">
        <InputForm label="Username" type="username" placeholder="masukan Nama Anda"/>
        <InputForm label="Email" type="email" placeholder="masukan email"/>
        <InputForm label="Password" type="password" placeholder="masukan password"/>
        <Button color="bg-red-500 w-full" >Register</Button>
    </form>
  )
}
