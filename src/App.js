
import './App.css';
import Navbar from './components/Navbar';
import OrderDetails from './components/OrderDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <OrderDetails orderId={'12345'}/>
    </div>
  );
}

export default App;
