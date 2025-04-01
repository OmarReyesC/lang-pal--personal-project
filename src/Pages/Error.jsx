import { useRouteError } from "react-router";

export default function Error() {
    const errorInfo = useRouteError();

    return (
        <main className="error-main">
            <h1 className="headline">Oh no. An error has ocurred :( </h1>
            <h2 className="title">{`${errorInfo.status}: ${errorInfo.statusText}`}</h2>
            <p className="label">{errorInfo.message}</p>
        </main>
    )
}