import { transactions } from './data'
import TransactionsList from './components/TransactionsList/TransactionsList'
import './App.css'

function App() {
  return (
    <>
      <TransactionsList transactions={transactions} />
    </>
  )
}

export default App
