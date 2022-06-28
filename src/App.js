import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

<div class="container">
        <div class="header">
            <h3>Our Pricing</h3>
            <div class="button">
                <div class="cer"></div>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <span>Basic</span>
                <h2>$199.99</h2>
                <ul>
                    <li>500 GB Storage</li>
                    <li>2 Users Allowed</li>
                    <li>Send Up to 3GB</li>
                </ul>
            <div class="buton">LERN MORE</div>
            </div>
            <div class="card">
                <span>Professional</span>
                <h2>$249.99</h2>
                <ul>
                    <li>1 TB Storage</li>
                    <li>5 Users Allowed</li>
                    <li>Send Up to 10GB</li>
                </ul>
            <div class="buton">LERN MORE</div>
            </div>
            <div class="card">
                <span>Master</span>
                <h2>$399.99</h2>
                <ul>
                    <li>2 TB Storage</li>
                    <li>10Users Allowed</li>
                    <li>Send Up to 20GB</li>
                </ul>
            <div class="buton">LERN MORE</div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
