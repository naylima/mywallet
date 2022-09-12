function renderError() {
    localStorage.clear("mywallet");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {

    const auth = JSON.parse(localStorage.getItem("mywallet"));

    if (!auth) {
        return renderError();
    }

    return (
        <>
            {children}
        </>
    );
    
}