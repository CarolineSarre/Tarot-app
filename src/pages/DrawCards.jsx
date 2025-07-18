import { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 20px auto;
`

const Button = styled.button`
  display: block;
  margin: 0 auto 20px;
  padding: 10px 20px;
  background-color: #f7c8e0;
  border: none;
  border-radius: 10px;
`

const Card = styled.div`
  background: #fff;
  padding: 16px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
`

export default function DrawCards() {
  const [question, setQuestion] = useState('')
  const [cards, setCards] = useState([])

  const handleDraw = () => {
    fetch('https://tarotapi.dev/api/v1/cards/random?n=3')
      .then(res => res.json())
      .then(data => setCards(data.cards))
  }

  return (
    <div>
      <h2>🔮 Tiragem simbólica</h2>
      <Input
        placeholder="Escreva sua pergunta..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <Button onClick={handleDraw}>Jogar</Button>

      {cards.length > 0 && (
        <>
          <p><strong>Sua pergunta:</strong> {question}</p>
          {cards.map(card => (
            <Card key={card.name_short}>
              <h3>{card.name}</h3>
              <p><strong>Significado:</strong> {card.meaning_up}</p>
            </Card>
          ))}
        </>
      )}
    </div>
  )
}
