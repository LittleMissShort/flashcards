import {useState} from "react"
import Card from "./Card"
import "./App.css"
import pic1 from"./images/pic1.jpg"
import pic2 from"./images/pic2.jpg"
import pic3MC from"./images/pic3MC.webp"
import pic4NS from"./images/pic4NS.jpg"

function App() {
  const cards = [
    { 
      topic: "Ports",
      question: "What port does HTTP use?",
      answer: "Port 80",
      image: pic1
    },
    {
     topic: "Network Security",
     question: "A system that Tony manges sends an SNMP trap. What type of information should Tony expect to receive?",
     answer: "Notification of an issue, such as links going down, authentication failures and reboots.",
     image: pic4NS
     },
    {
     topic:"Resillience and Physical Security",
     question: "What type of recovery site has some or most systems in place but does not have the data?",
     answer: "A cold site.",
     image: pic2
    },
    {
     topic: "Malicious Code",
     question:"What is the primary impact of bloatware?",
     answer:"Consuming resources, not really a threat but can cause performance issues and make the software vulnerable to attack.",
     image: pic3MC
    }
  ]


const [currentCard, setCurrentCard] = useState(0)

const nextCard = () => {
  const randomIndex = Math.floor(Math.random() * cards.length)
  setCurrentCard(randomIndex)
}

 return (
 
    <div className="App">
      <h1>Security+ Quizlet Flashcards</h1>

      <p> Study key cybersecurity concepts</p>

      <h3> Total Cards: {cards.length}</h3>

    <Card
      topic={cards[currentCard].topic}
      question={cards[currentCard].question}
      answer={cards[currentCard].answer}
      image={cards[currentCard].image}
    />

     <button onClick={nextCard}> Next Card </button>

     </div>
 )
}

export default App
