import fb from "../service/firebase";

export function currentUser(res) {
  const userId = res.user.uid;
  const gymData = fb.firestore.collection("gym").doc(userId);

  gymData.get().then((doc) => {
    console.log(doc.data());
  });
}
