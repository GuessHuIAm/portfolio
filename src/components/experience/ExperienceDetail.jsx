import { React, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const ExperienceDetail = ({location, time, link, description}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

    return (
        <article className="experience__detail">
            <div>
                <div>
                    <a href={link}>{location}</a>
                    <h5>{time}</h5>
                </div>
                <button className="experience__btn" onClick={() => setIsAnswerShowing(prev => !prev)}>
                    {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {isAnswerShowing && <small className='text-light'>{description}</small>}
        </article>
    )
}

export default ExperienceDetail