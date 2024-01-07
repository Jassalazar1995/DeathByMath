import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/SideBar';

const ChapterPage = () => {
    const { id } = useParams(); // Get the chapter id from the URL parameter using useParams hook
    const chapterId = id; // If you want to keep using chapterId in your code
    const subsections = []; // Define subsections for this chapter


    return (
        <div className="chapter-page">
            <Sidebar subsections={subsections} />
            <div className="content">
                
                hello
            </div>
        </div>
    );
};

export default ChapterPage;