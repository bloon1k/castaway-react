import React, {useState} from 'react'
// Styles
import './CommentForm-styles.scss'
// Child components
import Stars from "./Stars/Stars";
import Inputs from "./Inputs/Inputs";
// Context
import {StarsContext} from "./Contexts/StarsContext";

const CommentForm = () => {

    const [stars, setStars] = useState([1, 2, 3, 4, 5])

    return (
        <section className="comment-form">

            <div className="comment-form__wrapper">

                <div className="comment-form__text">
                    <div className="comment-form__question">
                        Have anything to share?
                    </div>
                    <div className="comment-form__title">
                        Leave a comment!
                    </div>
                </div>

                <StarsContext.Provider value={{stars: stars, setStars: setStars}}>
                    <div className="comment-form__component-wrapper">
                        <Stars/>
                        <Inputs/>
                    </div>
                </StarsContext.Provider>

            </div>

        </section>
    );
};

export default CommentForm;