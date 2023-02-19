import React, {useState} from 'react'

const Question = ({id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    return(
        <article key={id} className='question'>
            <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                { showInfo ? '-' : '+'}
            </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Question