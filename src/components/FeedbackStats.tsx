import React, { useContext } from 'react';
import { FeedbackContext } from "./context/FeedbackContext";

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return (
            <div className={"feedback-stats"}>
                <h4>No Reviews Yet</h4>
            </div>
        );
    }

    const totalRatings = feedback.reduce((acc, cur) => acc + cur.rating, 0);

    const average = totalRatings / feedback.length;

    return (
        <div className={"feedback-stats"}>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {average.toFixed(1)}</h4>
        </div>
    );
};

export default FeedbackStats;
