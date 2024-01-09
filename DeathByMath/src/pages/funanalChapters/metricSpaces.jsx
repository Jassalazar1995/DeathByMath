import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/SideBar';

export default MetricPage = () => {
    const { id } = useParams(); // Get the chapter id from the URL parameter using useParams hook
    const chapterId = id; // If I want to keep using chapterId
    const subsections = []; // Define subsections for this chapter


    return (
        <div className="chapter-page">
            <Sidebar subsections={subsections} />
            <div className="content">
                hihihihi
            </div>
        </div>
    );
};
