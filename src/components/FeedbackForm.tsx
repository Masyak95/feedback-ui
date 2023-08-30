import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { FeedbackType } from './FeedbackItem';


type FeedbackFormPropsType = {
    handleAdd: (newFeedback: FeedbackType) => void;
};

const FeedbackForm = ({ handleAdd }: FeedbackFormPropsType) => {
    const [text, setText] = useState<string>('');
    const [rating, setRating] = useState<number>(10);
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const [message, setMessage] = useState<string | null>(null);

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);

        if (newText.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback: FeedbackType = {
                id: uuidv4(),
                text,
                rating,
            };
            handleAdd(newFeedback);
            setText('');
            setRating(10);
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
