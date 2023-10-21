import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store/userStore';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
