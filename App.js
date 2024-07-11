import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
   <>
  
<Navbar title="textUtils" aboutText="AboutUs"/>

<div className="container my-3">
<TextForm heading="enter the text to analyse"/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;