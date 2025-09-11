import { useEffect, useState } from "react";
import { getImagePath, SPONSORS_API } from "../global/APIHelpers";

export default function App() {
    const [pdfLink, setPdfLink ] = useState("");

    useEffect(() => {
        // Get the sponsors data
        const getSponsors = async () => {
            try {
                const response = await fetch(SPONSORS_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`);
                }
                const formattedResult: AllSponsorsProps = await response.json();
                setPdfLink("https://drive.google.com/viewerng/viewer?embedded=true&url=" + getImagePath(formattedResult.package));
            } catch (e: unknown) {
                console.error(`Couldn't get sponsors: ${e}`);
            }
        };
        getSponsors();
    }, []);

    return <>
        {(pdfLink !== "") ? <object id="content" data={pdfLink} width="100vw" height="100vh" /> : null}
    </>;
}
