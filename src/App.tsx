import React, {useState} from 'react';
import Header from "./components/Header/Header";
import feedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(feedbackData)

    return (
        <div>
            <Header text={"Feedback UI"}/>
            <FeedbackList feedback={feedback}/>
        </div>
    );
}

export default App;
