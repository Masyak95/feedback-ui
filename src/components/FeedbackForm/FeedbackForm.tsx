import React, {ChangeEvent, useState} from 'react';
import Card from "../shared/Card";
import Button from "../shared/Button";

type FeedbackFormPropsType = {

}

const FeedbackForm = ({}: FeedbackFormPropsType) => {
    const [text, setText] = useState('')

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <Card reverse={false}>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/*{rating select component}*/}
                <div className="input-group">
                    <input
                        type="text"
                        placeholder={"write a review"}
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button
                        type={"submit"}
                        isDisabled={true}
                    >send</Button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;
