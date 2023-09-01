import {FaEdit, FaTimes} from 'react-icons/fa'

import React, {useContext} from 'react';
import Card from './shared/Card';
import {FeedbackContext} from "./context/FeedbackContext";

export type FeedbackType = {
    id: string;
    rating: number;
    text: string;
}


type FeedbackItemProps = {
    item: FeedbackType;
};
const FeedbackItem = ({item}: FeedbackItemProps) => {
    const {editFeedback ,deleteFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button
                onClick={()=> deleteFeedback ? deleteFeedback(item.id) : ""}
                className="close">
                <FaTimes color={"purple"}/>
            </button>
            <button onClick={()=> editFeedback ? editFeedback(item) : ""} className="edit">
                <FaEdit color={"purple"}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;
