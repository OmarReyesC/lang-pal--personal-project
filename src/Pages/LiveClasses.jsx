import { useEffect } from "react";

export default function LiveClasses() {
    
    useEffect(() => {
        fetch("/api/classes")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <main>
            <h1>Live Classes content</h1>
            <p></p>
        </main>
    );
}