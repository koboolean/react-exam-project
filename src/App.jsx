import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

const App = () => {
    return (
        <div>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </div>
    );
}

export default App;
