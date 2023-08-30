import React, {useState} from 'react';
import Header from "./components/Header/Header";
import feedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedback, setFeedback] = useState(feedbackData)

    const deleteFeedback = (id: number)=> {
        if (window.confirm("are you sure you want to delete?")){
            setFeedback(feedback.filter(
                (item)=> item.id !== id
            ))
        }
    }

    return (
        <div>
            <Header text={"Feedback UI"}/>
            <FeedbackForm/>
            <FeedbackStats
                feedback={feedback}
            />
            <FeedbackList
                feedback={feedback}
                handleDelete={deleteFeedback}
            />
        </div>
    );
}

export default App;
