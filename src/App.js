import './App.css';
import { AddBalance } from './components/AddBalance';
import { Balance } from './components/Balance';
import { BalanceList } from './components/BalanceList';
import { Header } from './components/Header';

function App() {
  return (
    <div className='container'>
      <Balance />
      <Header />
      <BalanceList />
      <AddBalance />
    </div>
  );
}

export default App;
