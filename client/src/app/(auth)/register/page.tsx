'use client'
import { ModeToggle } from "@/app/components/mode-toggle"
import RegisterForm from "./register-form"

const RegisterPage = () => {
  return (
    <div>
      {/* <ModeToggle />
      Register page */}
       <h1 className='text-xl font-semibold text-center'>Đăng ký</h1>
      <div className='flex justify-center'>
        <RegisterForm />
      </div>
    </div>
  )}
  
  export default RegisterPage