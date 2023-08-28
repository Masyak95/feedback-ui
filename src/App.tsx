import React, {useState} from 'react';
import Header from "./components/Header/Header";
import feedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(feedbackData)

  return (
      <div>
          <Header text={"Feedback UI"}/>
          <h1>
              <FeedbackList feedback={feedback}/>
          </h1>
      </div>
  );
}

export default App;
