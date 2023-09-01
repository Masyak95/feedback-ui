import React, {createContext, ReactNode, useState} from "react";
import {FeedbackType} from "../FeedbackItem";
import {v4 as uuidv4} from "uuid";

interface FeedbackProviderProps{
    children: ReactNode
}
interface FeedbackContextProps {
    feedback?: FeedbackType[],
    deleteFeedback?: (id: string) => void,
    addFeedback?:(newFeedback: FeedbackType)=>void
}

export const FeedbackContext = createContext<FeedbackContextProps>({})

export const FeedbackProvider = ({children}: FeedbackProviderProps)=>{

    const[feedback, setFeedback]=useState([
        {
            id:"1",
            text: "text",
            rating:1
        }
    ])

    const deleteFeedback = (id: string) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback: FeedbackType) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return<FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
