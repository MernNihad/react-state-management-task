import { CiAlarmOn } from "react-icons/ci";

function Home() {

  const imagelink = "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"

  return (
    <div className="Home">
      <CiAlarmOn size={60}/>
      <img src={imagelink} alt="" />
    </div>
  );
}

export default Home;
