import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 20px auto;
`

const Card = styled.div`
  background: #fff;
  padding: 16px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
`

export default function CardList() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://tarotapi.dev/api/v1/cards')
      .then(res => res.json())
      .then(data => setCards(data.cards))
  }, [])

  const filtered = cards.filter(card =>
    card.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>🌟 Todas as cartas</h2>
      <Input
        placeholder="Buscar por nome..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.map(card => (
        <Card key={card.name_short}>
          <h3>{card.name}</h3>
          <p><strong>Palavras-chave:</strong> {card.keywords?.join(', ')}</p>
        </Card>
      ))}
    </div>
  )
}
