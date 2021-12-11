import './App.css';
import travel_01 from'./assets/travel-01.jpg';
import travel_02 from'./assets/travel-02.jpg';
import travel_03 from'./assets/travel-03.jpg';
import Hero from './components/Hero';
import Slider from './components/Slider';
import NavBar from './components/NavBar';

const navbarLinks=[{
  url:"#",
  title:"Home"
},
{
  url:"#",
  title:"Trips"
},
{
  url:"#",
  title:"Rewards"
}]

function App() {
  return (
    <div className="App">
      <NavBar navBarLinks={navbarLinks}/>
        <Hero imageSrc={travel_01}/>
        <Slider imageSrc={travel_02} title={"Be an explorer!"} subtitle={"Our Platform offers a variety of Travel Locations"} />
        <Slider imageSrc={travel_03} title={"Memories for a lifetime!"} subtitle={"Your dream vacation is only a few clicks away"} flipped={true} />
    </div>
  );
}

export default App;
