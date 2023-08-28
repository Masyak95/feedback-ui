import React from 'react';
import FeedbackItem from "../FeedbackItem/FeedbackItem";

export type FeedbackType = {
    id: number;
    rating: number;
    text: string;
}

type FeedbackListPropsType = {
    feedback: FeedbackType[]
}

const FeedbackList = (props: FeedbackListPropsType) => {
    const {feedback}=props

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className={"feedback-list"}>
            {feedback.map((item)=>(
                <FeedbackItem/>
            ))}
        </div>
    );
};

export default FeedbackList;
