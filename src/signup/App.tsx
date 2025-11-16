export default function App() {
    const redirect = () => {
        window.location.href = "https://forms.hackclub.com/camelcase-signup"; // Sets the URL to the PDF
    };

    return (
        <>
            <div className="container">
                <h1>Redirecting to sign-up form...</h1>
                <button onClick={redirect}>...or click here</button>
            </div>
        </>
    );
}
