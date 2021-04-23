import fb from "../../service/firebase";
import { useHistory } from "react-router";
import "../../styles/Home.css";
import { userData } from "../../hooks/currentUser";

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
      <button
        onClick={() => {
          console.log(userData.data);
        }}
      >
        data
      </button>
    </div>
  );
}

export default Home;
