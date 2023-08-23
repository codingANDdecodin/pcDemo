import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import Map from './components/Home/map/Map';
import OurSkills from './components/Home/OurSkills/OurSkills';
import Careers from './components/CareersPage/Careers';

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      {/* <ContactUsPage></ContactUsPage> */}
        {/* <Map></Map> */}
        {/* <OurSkills></OurSkills> */}
        <Careers></Careers>
    </div>
  );
}

export default App;
