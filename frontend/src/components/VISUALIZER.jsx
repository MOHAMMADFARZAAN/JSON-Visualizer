import { ReactFlow } from '@xyflow/react'
import React from 'react'
import '@xyflow/react/dist/style.css';

const VISUALIZER = ({code}) => {
    const initialNodes = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
        { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
      ];
      const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


  return (
    <div>
      <div className='border m-5 bg-neutral-300' style={{ width: '60vw', height: '80vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </div>
  )
}

export default VISUALIZER
