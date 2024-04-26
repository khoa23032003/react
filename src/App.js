
import './App.scss';
import Header from './componets/headrer';
import TableUsers from './componets/tableuser';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='app-container'>
      <Container>
        <Header />
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
