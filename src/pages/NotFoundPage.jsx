import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage({ cart }) {
    return (
        <>
            <Header cart={cart} />
            <h1 className="not-found-message">Page not found</h1>
        </>
    );
}