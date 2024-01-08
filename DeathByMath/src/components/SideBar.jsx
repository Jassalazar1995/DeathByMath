import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Sidebar = ({ subsections }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
      {/* Moved the toggle button outside of sidebar-content */}
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '<<' : '>>'}
      </button>
      <div className="sidebar-content">
        {/* Sidebar content */}
        <li>Metric Spaces Definition</li>
        <li>Metric Space Example 1</li>
        <li>Metric Space Example 2</li>
        <li>Normed Linear Space Definition</li>
        <li>Normed Linear Space Example 1</li>
        <li>Normed Linear Space Example 2</li>
        <li>Norm Metric Theorem 1.1</li>
        <li>Inner Product Norm Theorem 1.2</li>
        <li>Cauchy-Bunyakovskii-Schwarz Inequality</li>
        <li>Sequence Spaces</li>
        <li>Little l p</li>
        <li>A discussion on Dimensions</li>
        <ul>
          {subsections.map((subsection, index) => (
            <li key={index}>
              <Link to={subsection.path}>{subsection.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

