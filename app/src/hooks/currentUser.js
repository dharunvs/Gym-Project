import fb from "../service/firebase";

let userDoc = [];

export function currentUser(res) {
  const userId = res.user.uid;
  const gymData = fb.firestore.collection("gym").doc(userId);
  // const members = fb.firestore.collection(res.user.id);

  gymData.get().then((doc) => {
    const docRef = doc.data();
    for (const i of Object.entries(docRef)) {
      window.localStorage.setItem(i[0], i[1]);
    }
  });
}

export const userData = {
  data: window.localStorage.getItem("email"),
};
