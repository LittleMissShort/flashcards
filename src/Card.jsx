import {useState} from "react"

function Card({ topic, question, answer, image }) {

    const [flipped, setFlipped] = useState(false)

    const flipCard = () => {
        setFlipped(!flipped)
    }

    return (
        <div className="card-container" onClick={flipCard}>

        <div className={flipped ? ".card.-is-flipped" : "card"}>

           
                <h3>{topic}</h3>
                <img src={image} alt="flashcard" className="card-image"/>
                <p>{flipped ? question : answer }</p>
        </div>
     
     </div>
    )
}

export default Card

