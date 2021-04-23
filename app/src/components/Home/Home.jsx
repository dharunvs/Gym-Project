import "../../styles/Home.css";
import fb from "../../service/firebase";

function Home() {
  return (
    <div className="home-container">
      Home{fb.firestore.collection("gym").doc()}
    </div>
  );
}

export default Home;
