import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
    return (
        <>
            <Header />
            <h1 className="not-found-message">Page not found</h1>
        </>
    );
}