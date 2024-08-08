import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative mt-[-10px] mb-32 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <p
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
              href="#"
            >
              You Can Sign Up To Access More Features!
            </p>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Interactive JSON
              <span className="grad-text bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Visualizer
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              An Interactive Tool through which you can easily VISUALIZE and EDIT your
              JSON data in an apprehensible manner allowing you to efficiently interact with
              the Data-Set both Visually and Grammatically.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-md font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
              href="/editor"
            >
              To The Editor
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            {/* <button
          type="button"
          className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          $ npm i preline
          <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
            <svg
              className="shrink-0 size-4 group-hover:rotate-6 transition"
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
              <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            </svg>
          </span>
        </button> */}
          </div>
          {/* End Buttons */}
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-gray-600 dark:text-neutral-400">
              No Registration Needed
            </span>
            <svg
              className="size-5 text-gray-300 dark:text-neutral-600"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
            </svg>
            <a
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
              href="#"
            >
              FAQs
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* End Hero */}



      <>

      {/* the editor animation */}
      <div>
  <div className="terminal-loader">
    <div className="terminal-header">
      <div className="terminal-title">JSON Loading...</div>
      <div className="terminal-controls">
        <div className="control close" />
        <div className="control minimize" />
        <div className="control maximize" />
      </div>
    </div>
    <div className="content">
      <div className="text br-main">&#123;</div>
      <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;"name": "frontend",</div>
      <div className="text">&nbsp;&nbsp;&nbsp;&nbsp;"version": "0.1.0",</div>
      <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;"private": true,</div>
      <div className="text">&nbsp;&nbsp;&nbsp;&nbsp;"scripts":</div>
      <div className="text br-sub">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;</div>
      <div className="text2 text3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"dev": "next dev",</div>
      <div className="text text3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"build": "next build",</div>
      <div className="text2 text3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lint": "next lint"</div>
      <div className="text br-sub">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
      <div className="text br-main">&#125;</div>
      
    </div>
  </div>
  </div>




</>

    </>

  )
}

export default Home
