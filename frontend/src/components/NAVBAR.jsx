'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import Login from './LOGIN';
import Signup from './SIGNUP';

const NAVBAR = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [signisOpen, setsignisOpen] = useState(true)
  const [signupOpen, setsignupOpen] = useState(false)

  return (
    <>

      {/* OPEN EDITOR */}



      {/* editor button dialog box */}
      <Dialog open={showAuth} as="div" className="relative z-10 focus:outline-none" onClose={() => setShowAuth(false)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition

            >
              {signisOpen ?
                <Login loginOpen={signisOpen} setLoginOpen={setsignisOpen} />
                :
                <Signup loginOpen={signisOpen} setLoginOpen={setsignisOpen} />}
            </DialogPanel>
          </div>
        </div>
      </Dialog>



      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-3xl flex flex-col border border-neutral-400 items-center justify-center h-[55vh] rounded-xl bg-[#171717] duration-200 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <span className='block mb-4 font-bold text-gray-800 text-2xl md:text-2xl lg:text-3xl dark:text-neutral-200'>
                You Can Also Upload Your<span className='grad-text bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'> JSON File</span></span>
              <h5 className='text-neutral-400 mb-2 w-[70%] text-sm text-center'>You can upload your JSON File or you can used the Editor to directly write and view the JSON Data</h5>
              <div className="text-center p-3">
                <Link
                  className="inline-flex w-[200px] hover:bg-neutral-900 duration-100 border border-neutral-400 justify-center h-40 mr-16 items-center gap-2 rounded-xl bg-neutral-800 py-1.5 px-3 text-xl text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                  href=""
                >
                  UPLOAD JSON FILE
                </Link>
                <span className='text-neutral-400'>or</span>
                <Link
                  className="inline-flex w-[200px] hover:bg-neutral-900 duration-100 border border-neutral-400 justify-center h-40 ml-16 items-center gap-2 rounded-xl bg-neutral-800 py-1.5 px-3 text-xl text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                  href="/editor"
                >
                  GO TO EDITOR
                </Link>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>












      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
        <nav className="relative max-w-8xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
          <div className="md:col-span-3">
            {/* Logo */}
            <Link
              className="flex-none text-5xl inline-block font-bold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent focus:outline-none focus:opacity-80 "
              href=""
              aria-label="Preline"
            >
              JSONSight
            </Link>
            {/* End Logo */}
          </div>
          {/* Button Group */}
          <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <button
              type="button"
              onClick={() => setShowAuth(true)}
              className="py-2 px-4 inline-flex items-center gap-x-2 text-[17px] font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="py-2 px-4 inline-flex items-center gap-x-2 text-xl font-medium rounded-xl border border-transparent bg-violet-700 text-white hover:bg-[#6047EC] focus:outline-none transition disabled:opacity-50 disabled:pointer-events-none"
            >
              Editor
            </button>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Button Group */}
          {/* Collapse */}
          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
              <div>
                <a
                  className="relative text-xl inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-[2px] before:bg-[#6047EC] dark:text-white"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-xl text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  Docs
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-xl text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  How To
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-xl text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  About
                </a>
              </div>
              {/* <div>
            <a
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              href="#"
            >
              Blog
            </a>
          </div> */}
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </>

  )
}

export default NAVBAR
