import React, {useState} from 'react';

const FeedbackItem = () => {
    const [rating, setRating]=useState<number | undefined>()
    const [text, setText]=useState<string>("")

    return (
        <div>
            <div className={"card"}>
                <div className="num-display">{rating}</div>
                <div className="text-display">{text}</div>
            </div>
        </div>
    );
};

export default FeedbackItem;
