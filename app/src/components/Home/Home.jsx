import fb from "../../service/firebase";
import { useHistory } from "react-router";
import "../../styles/Home.css";

function Home() {
  const history = useHistory();

  function logout() {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    history.push("login");
  }

  return (
    <div className="home-container">
      Home
      {/* {fb.firestore.collection("gym").doc()} */}
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Home;
