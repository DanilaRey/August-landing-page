import './style/App.css';
import Header from './components/UI/Navbar/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
