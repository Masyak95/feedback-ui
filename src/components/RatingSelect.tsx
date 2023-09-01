import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {FeedbackContext} from "./context/FeedbackContext";

type RatingSelectPropsType = {
    select: (rating: number)=>void
}

const RatingSelect = ({select}: RatingSelectPropsType) => {

    const { feedbackEdit } = useContext(FeedbackContext);

    const [selected, setSelected] = useState<number>(10)

    useEffect(()=>{
        setSelected(feedbackEdit?.item.rating || 10)
    }, [feedbackEdit])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelected(Number(e.currentTarget.value))
        select(Number(e.currentTarget.value))
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
};

export default RatingSelect;
