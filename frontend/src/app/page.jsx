import React from 'react';
import { ReactFlow } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 100, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 200 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function App() {
  return (
    <div className='bg-neutral-800 flex items-center justify-center h-[100vh]'>
    <div className='w-[50vw] h-[60vh] border border-black bg-orange-200'>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </div>
  );
}