import React from 'react';
import FeedbackItem, { FeedbackType } from "./FeedbackItem";

type FeedbackListPropsType = {
    feedback: FeedbackType[],
    handleDelete: (id: string)=>void
}

const FeedbackList = (props: FeedbackListPropsType) => {
    const { feedback,handleDelete } = props;

    if (feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default FeedbackList;
