import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {FeedbackType} from "./components/FeedbackItem";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
        <Router>
            <Header text={'Feedback UI'} />
            <div className="container">
                <Routes>
                    <Route path={'/'} element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList
                                feedback={feedback}
                                handleDelete={deleteFeedback}
                            />
                        </>
                    }>
                    </Route>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </div>
                <AboutIconLink/>
        </Router>
    );
}

export default App;
