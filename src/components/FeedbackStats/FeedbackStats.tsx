import React from 'react';
import {FeedbackType} from "../FeedbackItem/FeedbackItem";

type FeedbackStatsPropsType = {
    feedback:FeedbackType[],
}

const FeedbackStats = ({feedback}: FeedbackStatsPropsType) => {

    const totalRatings = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    },0)

   const average = totalRatings / feedback.length

    return (
        <div className={"feedback-stats"}>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
        </div>
    );
};

export default FeedbackStats
