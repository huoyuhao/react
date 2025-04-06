import '@xyflow/react/dist/style.css';
import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Dooring' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Flow' } },
  { id: '3', position: { x: 200, y: 100 }, data: { label: <div>Do Node</div> } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' }
  ];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100%', height: '30vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        {/* 插件添加了缩放、居中以及锁定视口的控制功能 */}
        <Controls />
        {/* 插件在屏幕的角落显示图形的一个缩略图 */}
        <MiniMap />
        {/* 插件实现了一些基本的可定制背景图案 */}
        <Background variant="dots" gap={12} size={1} />
        {/* 
<Panel /> 插件让你可以轻松地在视口顶部放置内容。
<NodeToolbar /> 插件允许你渲染附加在节点上的工具栏。
<NodeResizer /> 插件让你可以轻松地为你的节点添加缩放功能
 */}
      </ReactFlow>
    </div>
  );
}