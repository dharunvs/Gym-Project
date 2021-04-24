import fb from "../../service/firebase";
import { useHistory } from "react-router";
import "../../styles/Home.css";
import { userData } from "../../hooks/currentUser";

function Home() {
  const history = useHistory();

  function logout() {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    localStorage.clear();
    history.push("login");
    window.location.reload();
  }

  function addMember() {}

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
      <div className="add-memeber">
        <input type="text" />
        <button onClick={addMember}>Add</button>
      </div>
    </div>
  );
}

export default Home;
