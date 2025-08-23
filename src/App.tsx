import "./css/App.css";
import PlaceholderCababas from "./elements/placeholder/PlaceholderCababas";
import PlaceholderErrorPage from "./elements/placeholder/PlaceholderErrorPage";

function Placeholder() {
    return (
        <>
            <PlaceholderErrorPage></PlaceholderErrorPage>
            <PlaceholderCababas></PlaceholderCababas>
        </>
    );
}

function App() {
    return <Placeholder></Placeholder>;
}

export default App;
