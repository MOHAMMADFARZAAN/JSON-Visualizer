'use client';
import { Editor } from '@monaco-editor/react';
import React, { useRef } from 'react';



const CodeEditor = ({ code, setCode }) => {

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    // Automatically format the document once the editor is mounted
    editor.getAction('editor.action.formatDocument').run();
  };


  return (
    <div className='m-5 ml-10 rounded-editor'>
      <Editor
        options={{
          cursorStyle: "line",
          cursorWidth: 3,
          
          fontSize: 16,
          // scrollbar: {
          //   vertical: 'hidden', // Hides the vertical scrollbar
          //   horizontal: 'hidden', // Hides the horizontal scrollbar
          // },
          lineNumbersMinChars: 3, // Reduces the width reserved for line numbers
          lineNumbers: 'on', // Ensures line numbers are displayed
          lineNumbersFontSize: 12, // Adjust the font size for line numbers (Monaco doesn't directly support this, but setting fontSize here will affect line numbers too)
          minimap: {
            enabled: false, // Disables the minimap
          },
          overviewRulerLanes: 0,
        }}
        height="80vh"
        defaultLanguage="json"
        theme="vs-dark"
        className=''
        value={code}
        onMount={handleEditorDidMount}
        onChange={setCode} />;
    </div>
  )
}

export default CodeEditor;