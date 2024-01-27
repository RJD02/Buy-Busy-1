import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { db, getUsers } from "./components/firebaseConfig";

function App() {
  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const getUserList = async () => {
      const list = await getUsers(db);
      console.log(list);
    };
    getUserList();
  }, []);

  const dispatchAuthEvent = () => {};

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
