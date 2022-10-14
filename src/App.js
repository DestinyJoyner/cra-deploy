import './App.css';
import Contact from './Contact';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <h2>My New Update After Deploying!</h2>
      <h3>Creating new branch and making changes</h3>
      <Contact />
    </div>
  );
}

export default App;
