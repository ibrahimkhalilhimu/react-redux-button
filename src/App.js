import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase,multNumber,divNumber } from './actions';
import './App.css';

function App() {

  const btnState = useSelector((state)=>state.changeNumber);
  const otherState = useSelector((state)=>state.mulDivNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
 <h2>Increase And Decrease</h2>
     <div className="quantity">
        <a className="quantity__minus" title="Decrement"
        onClick={()=>dispatch(decrease(1))}
        ><span>-</span></a>
        <input className="quantity" type="text" className="quantity__input" value={btnState} />
        <a className="quantity__plus" title="Increment"
         onClick={()=>dispatch(increase(1))}
        ><span>+</span></a>
      </div>
      <h2>Multiply And Divide</h2>
      <div className="quantity">
        <a className="quantity__minus" title="Decrement"
        onClick={()=>dispatch(divNumber(5))}
        ><span>/</span></a>
        <input className="quantity" type="text" className="quantity__input" value={otherState} />
        <a className="quantity__plus" title="Increment"
         onClick={()=>dispatch(multNumber(5))}
        ><span>*</span></a>
      </div>
    </div>
  );
}

export default App;
