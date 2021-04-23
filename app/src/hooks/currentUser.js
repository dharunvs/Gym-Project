import fb from "../service/firebase";

let userDoc = [];

export function currentUser(res) {
  const userId = res.user.uid;
  const gymData = fb.firestore.collection("gym").doc(userId);

  gymData.get().then((doc) => {
    userDoc.push(doc.data);
  });
}

export const userData = {
  data: userDoc,
};
