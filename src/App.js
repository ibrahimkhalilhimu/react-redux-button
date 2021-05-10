import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './actions';
import './App.css';

function App() {
  const btnState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Welcome my redux first project</h1>
     <div className="quantity">
        <a className="quantity__minus" title="Decrement"
        onClick={()=>dispatch(decrease())}
        ><span>-</span></a>
        <input className="quantity" type="text" className="quantity__input" value={btnState} />
        <a className="quantity__plus" title="Increment"
         onClick={()=>dispatch(increase())}
        ><span>+</span></a>
      </div>
  
    </div>
  );
}

export default App;
