import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function MyClasses() {
    const [pastClasses, setPastClasses] = useState(null);

    useEffect(() => {
        async function fetchMyClasses() {
            try {
                const response = await fetch('/api/my-learning/my-classes');
                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(`Error status ${response.status}: ${errorMessage}`);
                }

                const data = await response.json();
                setPastClasses(data.classes);
            } catch(error) {
                console.error(error);
            }
        }
        fetchMyClasses();
    }, [])
    
    if(!pastClasses) {
        return (
        <h2>Loading. Please wait...</h2>
        )
    }

    const previousClassesDisplay = pastClasses.map(pastClass => {
        return(
            <article className="class-card--previous" key={pastClass.id}>
                <div className="class-card--previous__header">
                    <div className="class-card--previous__level title">{pastClass.level}</div>
                    <p className="class-card--previous__title title">{pastClass.lessonName}</p>
                </div>
                <div className="class-card--previous__body">
                    <div className="class-card--previous__instructor">
                        <img className="class-card--previous__instructor-pic" src={pastClass.instructor.picture} alt="" />
                        <p className="class-card--previous__instructor-name label">{pastClass.instructor.name}</p>
                    </div>
                    <p className="class-card--previous__date body">{pastClass.date}</p>
                </div>
                <Link to={`${pastClass.id}`} ></Link>
            </article>
        )
    })


    return (
        <section className="my-classes">
            <h2 className="previous-classes__title title">My previous classes</h2>
            <div className="previous-classes__list">
                {previousClassesDisplay}
            </div>
        </section>
    )
}