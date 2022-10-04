import './App.css';
import { FirstApp } from "./FirstApp"
import { CounterApp } from "./CounterApp"

function App() {
    return (
        <>
            <FirstApp title={"Hola, soy vegueta"}></FirstApp>
            <hr></hr>
            <CounterApp value={20}></CounterApp>
        </>
    );
}

export default App;
