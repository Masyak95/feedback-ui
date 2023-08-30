import React from 'react';
import FeedbackItem, { FeedbackType } from "./FeedbackItem";
import {AnimatePresence, motion} from "framer-motion";

type FeedbackListPropsType = {
    feedback: FeedbackType[],
    handleDelete: (id: string)=>void
}

const FeedbackList = (props: FeedbackListPropsType) => {
    const { feedback,handleDelete } = props;

    if (feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                   <motion.div
                       key={item.id}
                       initial={{opacity: 0}}
                       animate={{opacity:1}}
                       exit={{opacity: 0}}
                   >
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                   </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FeedbackList;
