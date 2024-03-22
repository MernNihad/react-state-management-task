import CardData from "./Card";
import "./App.css";
import HomeCard from "./HomeCard";

function App() {

  const obj = [
  
  {
    description:'ddfdffddfdffdfdfdfdfdf',
    title:"best sellin",
    img:"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    description:'ddfdffddfdffdfdfdfdfdf',
    title:"best sellin",
    img:"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
 
]

  return (
    <div>
      <h1>Tranding Items</h1>
      {/* <div className="App">
        <CardData
          description={"ddfdffddfdffdfdfdfdfdf"}
          img={"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={"title one"} />
        <CardData 
          description={"ddfdffddfdffdfdfdfdfdf"} 
          img={"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={"title two"} />
        <CardData 
          description={"ddfdffddfdffdfdfdfdfdf"} 
          img={"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={"title two"} /> 
        <CardData 
          description={"ddfdffddfdffdfdfdfdfdf"} 
          img={"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={"title two"} /> 
        
     
      </div> */}



      <h1>Best Items</h1>
      {/* <div className="App">
       { obj.map((item,)=>{
        return(
          <CardData
          description={item.description}
          img={item.img}
          title={item.title}
        />
        )
       })
      } */}
       

       <HomeCard/>
       
      
     
      {/* </div> */}
    </div>
  );
}

export default App;
