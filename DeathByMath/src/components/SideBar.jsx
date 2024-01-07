import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ subsections }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
            {/* Toggle Button */}
            <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>

            {/* Sidebar Content */}
            <div className="sidebar-content">
                hellolooo2
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