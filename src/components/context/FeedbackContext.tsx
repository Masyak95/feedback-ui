import React, {createContext, ReactNode, useState} from "react";
import {FeedbackType} from "../FeedbackItem";
import {v4 as uuidv4} from "uuid";

interface FeedbackProviderProps{
    children: ReactNode
}
interface FeedbackContextProps {
    feedback?: FeedbackType[]
    deleteFeedback?: (id: string) => void
    addFeedback?:(newFeedback: FeedbackType)=>void
    editFeedback?:(item: FeedbackType)=> void
    feedbackEdit?: { item: FeedbackType; edit: boolean}
    updateFeedback?: (id: string, updateItem: FeedbackType )=>void

}

export const FeedbackContext = createContext<FeedbackContextProps>({})

export const FeedbackProvider = ({children}: FeedbackProviderProps)=>{

    const[feedback, setFeedback]=useState<FeedbackType[]>([
        {
            id:"1",
            text: "text",
            rating:1
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState<{
        item: FeedbackType;
        edit: boolean;
    }>({
        item: {id: "", text: "", rating: 0},
        edit: false
    })

    const deleteFeedback = (id: string) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback: FeedbackType) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    //update feedback item
    const updateFeedback = (id: string, updateItem: FeedbackType )=>{
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updateItem} : item
        ))
    }

    //set item to be updated
    const editFeedback = (item: FeedbackType) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return<FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,

        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
