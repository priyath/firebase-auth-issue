import './App.css';
import {loginWithGoogle} from "./firebase";

function App() {

  const handleSignUp = async () => {
    await loginWithGoogle();
    setTimeout( () => {
      window.location.reload();
    }, 10000);
  };

  return (
    <div className="App">
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default App;
