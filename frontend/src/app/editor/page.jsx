'use client';
import CodeEditor from '@/components/EDITOR';
import VISUALIZER from '@/components/VISUALIZER';
import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react';

const JSONEditor = () => {

  const [jsonData, setJsonData] = useState(JSON.stringify({
    "name": "frontend",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "@fortawesome/fontawesome-svg-core": "^6.6.0",
      "@fortawesome/free-solid-svg-icons": "^6.6.0",
      "@fortawesome/react-fontawesome": "^0.2.2",
      "@headlessui/react": "^2.1.2",
      "@monaco-editor/react": "^4.6.0",
      "@xyflow/react": "^12.0.4",
      "next": "14.2.5",
      "react": "^18",
      "react-daisyui": "^5.0.3",
      "react-dom": "^18"
    },
    "devDependencies": {
      "eslint": "^8",
      "eslint-config-next": "14.2.5",
      "postcss": "^8",
      "tailwindcss": "^3.4.1"
    }
  }
  ));

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-5'>
        <CodeEditor code={jsonData} setCode={setJsonData} />
      </div>
      <div className='col-span-7'>
        <VISUALIZER code={jsonData} />
      </div>
    </div>
  )
}

export default JSONEditor;