export default function App() {
    const redirect = () => {
        window.location.href = "/documents/SponsorshipPackage.pdf"; // Sets the URL to the PDF
    };

    return (
        <>
            <div className="container">
                <h1>Redirecting to Sponsorship Package...</h1>
                <button onClick={redirect}>...or click here</button>
            </div>
        </>
    );
}
