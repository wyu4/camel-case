import "./../css/placeholder/PlaceholderApp.css";

import PlaceholderCababas from "../elements/placeholder/PlaceholderCababas";
import PlaceholderError from "../elements/placeholder/PlaceholderError";

export default function PlaceholderPage() {
    return (
        <>
            <PlaceholderError></PlaceholderError>
            <PlaceholderCababas></PlaceholderCababas>
        </>
    );
}
