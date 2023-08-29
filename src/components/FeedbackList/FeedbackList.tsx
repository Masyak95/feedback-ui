import React from 'react';
import FeedbackItem, { FeedbackType } from "../FeedbackItem/FeedbackItem";

type FeedbackListPropsType = {
    feedback: FeedbackType[]
}

const FeedbackList = (props: FeedbackListPropsType) => {
    const { feedback } = props;

    if (feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default FeedbackList;
