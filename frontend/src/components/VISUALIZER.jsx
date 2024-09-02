import React, { useCallback, useEffect, useMemo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import classes from './visualizer.module.css';

function JSONBlock({ data }) {

  const { jsonData } = data;
  console.log(jsonData);
  

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  // console.log(data);


  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className={classes.blockBody}>
        {
          Object.entries(jsonData).map(pair => (
            <div>{pair[0]} : {pair[1]}</div>
          ))
        }
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
      />
    </>
  );
}

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    type: 'jsonBlock',
    data: { jsonData: { name: 'raju', email: 'raju@mail.com', password: '1234' } }
  },
  {
    id: '2',
    position: { x: 200, y: 0 },
    type: 'jsonBlock',
    data: { jsonData: { name: 'raju', email: 'raju@mail.com', password: '1234' } }
  },
  {
    id: '3',
    position: { x: 0, y: 100 },
    type: 'jsonBlock',
    data: { jsonData: { name: 'raju', email: 'raju@mail.com', password: '1234' } }
  },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App({ code }) {
  console.log(code);
  const obj = JSON.parse(code);
  const nodeData = [];
  // console.log(obj);

  const [nodes, setNodes, onNodesChange] = useNodesState(nodeData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log(nodes);
  
  useEffect(() => {
    const obj = JSON.parse(code);
    let nodeId = 0;

    const extractValues = (obj, lvl = 1, parentId = null) => {
      for (let pair of Object.entries(obj)) {
        if (typeof pair[1] !== 'object') {
          nodeData.push({
            id: `${nodeId++}`,
            type: 'jsonBlock',
            position: {
              x: lvl * 100, // Example x coordinate based on level
              y: nodeId * 50 // Example y coordinate based on nodeId
            },
            data: { jsonData: { name: 'raju', email: 'raju@mail.com', password: '1234' } },
            parentId: parentId
          });
        } else {
          const currentId = `${nodeId++}`;
          nodeData.push({
            id: currentId,
            type: 'jsonBlock',
            position: {
              x: lvl * 100, // Example x coordinate based on level
              y: nodeId * 50 // Example y coordinate based on nodeId
            },
            data: { jsonData: { name: 'raju', email: 'raju@mail.com', password: '1234' } },
            parentId: parentId
          });
          extractValues(pair[1], lvl + 1, currentId);
        }
      }
    };

    extractValues(obj);
    setNodes(nodeData);
  }, [code]);

  const nodeTypes = useMemo(() => ({ jsonBlock: JSONBlock }), []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className='m-5 border border-neutral-500 rounded-xl' style={{ width: '55vw', height: '80vh' }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}