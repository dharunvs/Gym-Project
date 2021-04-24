import fb from "../service/firebase";

let userDoc = [];

export function currentUser(res) {
  const userId = res.user.uid;
  const gymData = fb.firestore.collection("gym").doc(userId);

  gymData.get().then((doc) => {
    const docRef = doc.data();
    for (const i of Object.entries(docRef)) {
      console.log(i);
      localStorage.setItem(i[0], i[1]);
    }
  });
}

export const userData = {
  data: userDoc,
  //   name: userDoc.fin,
};
