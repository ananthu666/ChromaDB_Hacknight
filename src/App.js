// Importing modules
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Recipy from "./components/Recipy";
import Vegies from "./components/Vegies";
import Pfc from "./components/Pfc"; 



// add cores middle ware

function App() {
	// usestate for setting a javascript
	// object for storing and using data


	const [data1, setdata1] = useState({
    re1:"",
    re2:"",
    re3:"",
    re4:"",
    re5:"",
    
	});
  const [vegdata, setvegdata] = useState(
    {
      veg1:"Suggestions",
      veg2:"Suggestions",
      veg3:"Suggestions",
      veg4:"Suggestions",
      veg5:"Suggestions",
      veg6:"Suggestions",
      veg7:"Suggestions",
      veg8:"Suggestions",
      veg9:"Suggestions",
      veg10:"Suggestions",

    }
  );

	// Using useEffect for single rendering

  document.body.style.backgroundColor='grey'
  // content of reciepy component
  // document.getElementById('100').innerHTML=data.re1

  // ***********************************************************************************************88
  

  const generateMeal = () => {
    const pro=document.getElementById('protein');
    const fat=document.getElementById('fat');
    const carbo=document.getElementById('carbohydrates');
    console.log(pro.value);
    console.log(fat.value);
    console.log(carbo.value);
    // proteins_100g: 14.6;carbohydrates_100g: 67.4;fat_100g: 6.4
    const payload = {
      proteins_100g: pro.value,
      carbohydrates_100g: carbo.value,
      fat_100g: fat.value,
    };
  
    // Using fetch to send the payload to the backend
    fetch("/data", {
      method: "POST", // or "PUT" or "PATCH" depending on your backend API
      headers: {
        "Content-Type": "application/json" // Specify the content type as JSON
      },
      body: JSON.stringify(payload) ,// Convert the payload to JSON and send it in the request body 
    })
    
    // wait for the response from the server and store the response in the state
    
      // Using fetch to fetch the API from the Flask server
      // The fetch request will be redirected to a proxy
      setTimeout(function() {
        // Code to execute after waiting for 10 seconds
        console.log("Waited for 10 seconds!");
      }, 10000);
      fetch("/data")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        
        .then((data) => {
          // Setting the data from the API
          // console.log("hello");
          // console.log(data);
          
          setdata1({
            re1:data[1][0],
            re2:data[1][1],
            re3:data[1][2],
            re4:data[1][3],
            re5:data[1][4],
          });
          setvegdata({
            veg1:data[0][0],
            veg2:data[0][1],
            veg3:data[0][2],
            veg4:data[0][3],
            veg5:data[0][4],
            veg6:data[0][5],
            veg7:data[0][6],
            veg8:data[0][7],
            veg9:data[0][8],
            veg10:data[0][9],
          });
          setTimeout(function() {
            // Code to execute after waiting for 10 seconds
            console.log("Waited for 10 seconds!");
          }, 10000);
          
          setTimeout(function() {
            // Code to execute after waiting for 10 seconds
            console.log("Waited for 10 seconds!");
          }, 10000);
          
        
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
        
    
}

const refresh=()=>{

  fetch("/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data3) => {
        // Setting the data from the API
        console.log(data3);
        
        setdata1({
          re1:data3[1][0],
          re2:data3[1][1],
          re3:data3[1][2],
          re4:data3[1][3],
          re5:data3[1][4],
        });
        setvegdata({
          veg1:data3[0][0],
          veg2:data3[0][1],
          veg3:data3[0][2],
          veg4:data3[0][3],
          veg5:data3[0][4],
          veg6:data3[0][5],
          veg7:data3[0][6],
          veg8:data3[0][7],
          veg9:data3[0][8],
          veg10:data3[0][9],
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
}
  
  // ***********************************************************************************************88
	return (
    <>
    <Navbar mode='dark' refresh={refresh} />
    <div className="comb">

    <Pfc generateMeal={generateMeal} />
    <Vegies food={vegdata}/>
    </div>
   
		<div className="App">
      
			{/* <header className="App-header">
				<h1>React and flask</h1>
				
				<p>{data.name}</p>
				<p>{data.age}</p>
				<p>{data.date}</p>
				<p>{data.programming}</p>

			</header> */}
      <div>
      
    <Recipy food={data1}/>
    </div>
		</div>
    </>
	);
}

export default App;
