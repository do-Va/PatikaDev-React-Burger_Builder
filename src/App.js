import Burger from './components/Burger';
import Menu from './components/Menu';
import './sass/_app.scss';

function App() {
  return (
    <div className="main-container">
      <Burger />
      <Menu />
    </div>
  );
}

export default App;
