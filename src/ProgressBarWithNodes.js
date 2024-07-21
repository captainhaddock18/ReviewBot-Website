import React, { useState } from 'react';
import './ProgressBarWithNodes.css'; // Ensure this path is correct

const ProgressBarWithNodes = () => {
  const nodes = [
    { id: 1, label: 'TASK-I', info: 'We got divided into two teams and each team had to make a cool website using HTML, CSS and JavaScript.', imageUrl: 'https://img.freepik.com/free-photo/global-searching-icon-white-background_53876-65525.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user' },
    { id: 2, label: 'TASK-II', info: 'We got divided into three teams and each team had to perform Exploratory Data Analysis(EDA) on the datasets provided.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLs9PvauxgswQln3RS_fF_xTk6b56M0t0hUQ&s' },
    { id: 3, label: 'TASK-III', info: 'This was an individual task of building KNN models to understand how they work from scratch and with libraries like sklearn.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Hey_Machine_Learning_Logo.png' },
    { id: 4, label: 'TASK-IV', info: 'This was an individual task of building LINEAR REGRESSION and LOGISTIC REGRESSION models to understand how they work from scratch and with libraries sklearn.', imageUrl: 'https://cdn-icons-png.freepik.com/512/3295/3295476.png' },
  ];

  // Initialize the selectedNode with the first node
  const [selectedNode, setSelectedNode] = useState(nodes[0]);
  const [hoveredNode, setHoveredNode] = useState(null);

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
