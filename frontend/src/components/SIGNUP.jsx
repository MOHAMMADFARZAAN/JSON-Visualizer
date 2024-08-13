import Link from 'next/link'
import React from 'react'

const Signup = ({ loginOpen, setLoginOpen }) => {
    return (
        <div
            className="w-full max-w-md flex flex-col p-5 border border-neutral-400 items-center h-[60vh] rounded-xl bg-[#171717] duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
            <span className='text-4xl font-bold m-2 mt-8 grad-text bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Sign Up</span>
            <h5 className='text-neutral-400 mb-2 w-[70%] text-sm text-center'>Sign Up to Access Full Features</h5>
            <div className="text-center flex items-center justify-center p-3">
                <form className='w-[80%]' action="">
                    <input
                        class="bg-[#222630] px-4 py-3 mb-5 outline-none w-[300px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                        name="text"
                        placeholder="enter email or username"
                        type="text"
                    />
                    <input
                        class="bg-[#222630] px-4 py-3 mb-3 outline-none w-[300px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                        name="password"
                        placeholder="enter your password"
                        type="password"
                    />
                    <span className='text-sm text-neutral-400'>Already have an account?</span>&nbsp;<button className='text-violet-600' onClick={() => { setLoginOpen(true) }} >Sign In!</button>
                    <button
                        type="button"
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
