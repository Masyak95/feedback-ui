import { FaTimes } from 'react-icons/fa'
import React from 'react';
import Card from './shared/Card';

export type FeedbackType = {
    id: string;
    rating: number;
    text: string;
}

type FeedbackItemPropsType = {
    item: FeedbackType;
    handleDelete: (id: string)=>void;
}

const FeedbackItem = ({ item,handleDelete }: FeedbackItemPropsType) => {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button
                onClick={()=> handleDelete(item.id)}
                className="close">
                <FaTimes color={"purple"}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;
