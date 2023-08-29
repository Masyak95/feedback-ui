import React from 'react';
import Card from '../shared/Card';

export type FeedbackType = {
    id: number;
    rating: number;
    text: string;
}

type FeedbackItemPropsType = {
    item: FeedbackType;
}

const FeedbackItem = ({ item }: FeedbackItemPropsType) => {
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;
