import React, {ChangeEvent, useState} from 'react';
import Card from "../shared/Card";
import Button from "../shared/Button";

type FeedbackFormPropsType = {

}

const FeedbackForm = ({}: FeedbackFormPropsType) => {
    const [text, setText] = useState<string>('')
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
    const [message, setMessage] = useState<string | null>('')

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (text === ""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10){
            setMessage("text must be at least 10 characters")
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
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
                        isDisabled={btnDisabled}
                    >send</Button>
                </div>
                {message && <div className={'message'}>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
