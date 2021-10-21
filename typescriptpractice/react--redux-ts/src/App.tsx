import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreator, State } from './state/mainIndex';


function App() {
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankCrupt } = bindActionCreators(actionCreator, dispatch)
  const Amount = useSelector((state: State) => state.bank)
  return (
    <div className="App">
      <h1>{Amount}</h1>
      <button onClick={() => depositMoney}>Deposit</button>
      <button onClick={() => withdrawMoney}>Withdraw</button>
      <button onClick={() => bankCrupt}>bankCrupt</button>
    </div>
  );
}

export default App;
