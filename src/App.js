import React, { useState, useEffect, Suspense } from "react";
import firebase from "./fbConfig";
import { useRouter } from "./hooks/useRouter";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, [currentUser]);

  const routing = useRouter(currentUser);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>
      <button
        onClick={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
              console.log("Ви успішно вийшли!");
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        Выйти
      </button>
    </>
  );
}

export default App;
