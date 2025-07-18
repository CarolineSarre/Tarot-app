import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`

const Button = styled.button`
  margin: 10px;
  padding: 12px 24px;
  background-color: #d7b4f3;
  border: none;
  border-radius: 10px;
  font-size: 16px;
`

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <h1>🔮 Tarot Místico</h1>
      <Button onClick={() => navigate('/cards')}>Ver todas as cartas</Button>
      <Button onClick={() => navigate('/tiragem')}>Fazer uma tiragem</Button>
    </Container>
  )
}
