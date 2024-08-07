'use client';
import CodeEditor from '@/components/EDITOR';
import VISUALIZER from '@/components/VISUALIZER';
import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react';

const JSONEditor = () => {

  const [jsonData, setJsonData] = useState(JSON.stringify({
    name: 'raju',
    email: 'raju@mail.com',
    password: 'rajukapassword'
  }));

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4'>
        <CodeEditor code={jsonData} setCode={setJsonData} />
      </div>
      <div className='col-span-8'>
        <VISUALIZER code={jsonData} />
      </div>
    </div>
  )
}

export default JSONEditor;