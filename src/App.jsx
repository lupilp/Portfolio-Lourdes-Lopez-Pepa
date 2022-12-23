import styles from "./App.module.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.cont}>
        <Home></Home>
        <About></About>
      </div>
    </>
  );
}

export default App;
