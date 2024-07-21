import React, { useState } from 'react';
import './ProgressBarWithNodes.css'; // Ensure this path is correct

const ProgressBarWithNodes = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { id: 1, label: 'TASK-I', info: 'We got divided into two teams and each team had to make a cool website using HTML, CSS and JavaScript.', imageUrl: 'https://scythe-potential-fa4.notion.site/Task-1-16b12bf123244a61be093c4d5b8d1fe4' },
    { id: 2, label: 'TASK-II', info: 'We got divided into three teams and each team had to perform Exploratory Data Analysis(EDA) on the datasets provided.', imageUrl: 'https://scythe-potential-fa4.notion.site/Task-2-429c3c6753824bf58010f58a0a78a800' },
    { id: 3, label: 'TASK-III', info: 'This was an individual task of building KNN models to understand how they work from scratch and with libraries like sklearn.', imageUrl: 'https://scythe-potential-fa4.notion.site/Task-3-4b09c35e4f664519b440ee604ba30456' },
    { id: 4, label: 'TASK-IV', info: 'This was an individual task of building LINEAR REGRESSION and LOGISTIC REGRESSION models to understand how they work from scratch and with libraries sklearn.', imageUrl: 'https://scythe-potential-fa4.notion.site/Task-4-0d471c521b6d431a8f337710a174c2d6' },
  ];

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleNodeHover = (node) => {
    setHoveredNode(node);
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  const getBarStyle = () => {
    if (!selectedNode) return { width: '0%' };
    const selectedIndex = nodes.findIndex(n => n.id === selectedNode.id) + 1;
    const progress = (selectedIndex / nodes.length) * 100;
    return { width: `${progress}%` };
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="bar-container">
          <div className="bar" style={getBarStyle()}></div>
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`node ${selectedNode?.id === node.id ? 'selected' : ''}`}
              onClick={() => handleNodeClick(node)}
              onMouseEnter={() => handleNodeHover(node)}
              onMouseLeave={handleNodeLeave}
              style={{ left: `${(node.id - 1) / (nodes.length - 1) * 100}%` }}
            >
              <div className="tooltip">{node.info}</div>
            </div>
          ))}
        </div>
      </div>
      {selectedNode && (
        <div className="node-card">
          <img src={selectedNode.imageUrl} alt={`${selectedNode.label} Thumbnail`} className="card-image" />
          <h3>{selectedNode.label}</h3>
          <p>{selectedNode.info}</p>
          <button className="card-button" onClick={() => window.open('https://scythe-potential-fa4.notion.site/ReviewBot-RAID-d801dcff77384a4ea382384ab1090ac6', '_blank')}>Go to Page</button>
        </div>
      )}
      {hoveredNode && !selectedNode && (
        <div className="node-info">
          <h3>{hoveredNode.label}</h3>
          <p>{hoveredNode.info}</p>
        </div>
      )}
    </div>
  );
};

export default ProgressBarWithNodes;
