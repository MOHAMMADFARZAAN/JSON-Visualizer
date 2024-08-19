import axios from 'axios'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import * as Yup from 'yup'


const SignupSchema = Yup.object({
    email:Yup.string().required('Email is required').email("Invalid Email"),
    password:Yup.string().min(6,'Min 6 char required').max(20,'Max 20 char')
    .matches(/[a-z]/,'lowercase required').matches(/[A-Z]/,'uppercase').matches(/[0-9]/,'numbers ')
    .matches(/\W/,'Special characters'),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'), null],'Passwords must Match')
  })



const Signup = ({ loginOpen, setLoginOpen }) => {

    const signupForm = useFormik({

        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log(values);
            axios.post('http://localhost:5000/user/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('Your Account Has Been Registered!')
                }).catch((err) => {
                    console.log(err);
                    if (err?.response?.data?.code === 11000) {
                        toast.error('Email Already Exists')
                        setSubmitting(false)
                    }

                });
        },
        validationSchema:SignupSchema
    })


    return (
        <div
            className="w-full max-w-md flex flex-col p-5 border border-neutral-400 items-center h-[76vh] rounded-xl bg-[#171717] duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
            <span className='text-4xl font-bold m-2 mt-8 grad-text bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Sign Up!</span>
            <h5 className='text-neutral-400 mb-2 w-[70%] text-sm text-center'>Sign Up to Access Full Features</h5>
            <div className="text-center flex items-center justify-center p-3">
                <form className='w-[80%]' onSubmit={signupForm.handleSubmit}>
                    <input
                        class="bg-[#222630] px-4 py-3 my-2 outline-none w-[300px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        placeholder="enter your name"
                        type="text"
                    />

                    <input
                        class="bg-[#222630] px-4 py-3 my-2 outline-none w-[300px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                        id="email"
                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                        placeholder="enter your email"
                        type="email"
                    />
                    

                    {signupForm.touched.email && (
                    <small className='text-red-600'>{signupForm.errors.email}</small>
                    )}


                    <input
                        class="bg-[#222630] px-4 py-3 my-2 outline-none w-[300px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                        id="password"
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        placeholder="enter new password"
                        type="password"
                    />
                    <input
                        class="bg-[#222630] px-4 py-3 my-2 outline-none w-[300px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                        id="confirmpassword"
                        value={signupForm.values.confirmpassword}
                        onChange={signupForm.handleChange}
                        placeholder="re-enter new password"
                        type="password"
                    />
                    <span className='text-sm text-neutral-400'>Already have an account?</span>&nbsp;<button type='button' className='text-violet-600' onClick={() => { setLoginOpen(true) }} >Sign In!</button>
                    <button
                        type="submit"
                        className="py-2 px-4 w-40 m-8 inline-flex items-center justify-center gap-x-2 text-xl font-medium rounded-xl border border-transparent bg-violet-700 text-white hover:bg-[#6047EC] focus:outline-none focus:bg-[#6047EC] transition disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup
