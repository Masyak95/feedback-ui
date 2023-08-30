import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {FeedbackType} from "./components/FeedbackItem";

function App() {
    const [feedback, setFeedback] = useState<FeedbackType[]>(feedbackData);

    const addFeedback = (newFeedback: FeedbackType) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id: string) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <div>
            <Header text={'Feedback UI'} />
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList
                feedback={feedback}
                handleDelete={deleteFeedback}
            />
        </div>
    );
}

export default App;
