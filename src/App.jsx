import './App.css';
import './Components/InputButton/InputButton'
import LoginView from './Components/LoginView/LoginView';
import RegisterView from './Components/RegisterView/RegisterView';
import HomeView from './Components/HomeView/HomeView';

function App() {
  return (
    <div className="App">
      {/* <LoginView/> */}
      {/* <RegisterView/> */}
      <HomeView/>
    </div>
  );
}

export default App;
