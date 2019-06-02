import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
				<button onClick={() => {sendColour("#ff0000")}} className="red">
					Red
				</button>
				<button onClick={() => {sendColour("#00ff00")}} className="green">
					Green
				</button>
				<button onClick={() => {sendColour("#0000ff")}} className="blue">
					Blue
				</button>
				<button onClick={() => {sendColour("#00ffff")}} className="cyan">
					Cyan
				</button>
				<button onClick={() => {sendColour("#ffffff")}} className="white">
					White
				</button>
				<button onClick={() => {sendColour("#fdf5e6")}} className="warmwhite">
					Warm White
				</button>
				<button onClick={() => {sendColour("#a020f0")}} className="purple">
					purple
				</button>
				<button onClick={() => {sendColour("#ff00ff")}} className="magenta">
					Magenta
				</button>
				<button onClick={() => {sendColour("#ffff00")}} className="yellow">
					Yellow
				</button>
				<button onClick={() => {sendColour("#ff8c00")}} className="orange">
					Orange
				</button>

			</div>
			
    </div>
  );
}

function sendColour(colour) {
	console.log("Changing colour...");
	fetch('http://192.168.1.100:1880/colour', {
	  method: 'POST',
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		colour: colour
	  })
	})
}

export default App;
