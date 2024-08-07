'use client';
import { Editor } from '@monaco-editor/react';
import React from 'react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className='m-5 ml-10'>
      <Editor
        height="80vh"
        defaultLanguage="json"
        value={code}
        onChange={setCode} />;
    </div>
  )
}

export default CodeEditor;