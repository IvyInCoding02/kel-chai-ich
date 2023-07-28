import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutUs } from './components/pages/AboutUs';
import { Scholarships } from './components/pages/Scholarships';
import { Footer } from './components/Footer';
import MyRoutes from './components/routes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MyRoutes/>
    </div>
  );
}

export default App;
