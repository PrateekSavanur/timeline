import React, { useState } from "react";
import "./index.css";

const Timeline = () => {
  const [itemCount, setItemCount] = useState(6);
  const [timelineItems, setTimelineItems] = useState(
    Array.from({ length: itemCount }, (_, index) => ({
      subheading: `Subheading ${index + 1}`,
      description: `Description ${index + 1}`,
    }))
  );

  const handleGenerate = () => {
    setTimelineItems(
      Array.from({ length: itemCount }, (_, index) => ({
        subheading: `Subheading ${index + 1}`,
        description: `Description ${index + 1}`,
      }))
    );
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Timeline</h2>
      <div className="input-container">
        <input
          type="number"
          min="1"
          value={itemCount}
          onChange={(e) => setItemCount(Number(e.target.value))}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div className="timeline-wrapper">
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.subheading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
