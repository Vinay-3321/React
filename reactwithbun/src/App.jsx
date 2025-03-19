//import './App.css'

function App() {

  return (
    <>
      <MercedesGclass />
      <MercedesGclass />
    </>
  )
}

const MercedesGclass = () =>{

  const name = "Mercedes G-Wagon";
  const price = "4.7 Crores";
  const summary = "The Mercedes-Benz G-Class G63 AMG (often simply called the G63) is a high-performance variant of the iconic G-Class SUV, renowned for its rugged yet luxurious design. It combines the boxy, traditional aesthetic of the G-Class with extreme performance capabilities thanks to AMG's engineering expertise. ";
   return(
    <div>
      <div>
        <img src=".\car.jpg" width='50%' height='35%'></img>
       </div>
        <h2>Name: {name}</h2>
        <h3>Price: {price} </h3>
        <p>Summary: {summary} </p>
        <button>Purchase Now</button>
   </div>
   );
};

export default App
