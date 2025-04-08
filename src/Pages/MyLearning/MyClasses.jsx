import { Link, useLoaderData } from "react-router";
import { requireAuth } from "../../utils";

export async function myClassesLoader(obj) {
    await requireAuth(obj);

    const response = await fetch('/api/my-learning/my-classes');
    if (!response.ok) {
        throw {
            message: 'Failed to fetch past classes',
            statusText: response.statusText,
            status: response.status
        }
    }

    const data = await response.json();
    return data
}

export default function MyClasses() {
    const pastClasses = useLoaderData().classes;


    const previousClassesDisplay = pastClasses.map(pastClass => {
        return(
            <article className="class-card--previous" key={pastClass.id}>
                <div className="class-card--previous__header">
                    <div className="class-card--previous__level title">{pastClass.level}</div>
                    <p className="class-card--previous__title title">{pastClass.lessonName}</p>
                </div>
                <div className="class-card--previous__body">
                    <div className="class-card--previous__instructor">
                        <img className="class-card--previous__instructor-pic" src={pastClass.instructor.picture} alt={`Picture of ${pastClass.instructor.name}`} />
                        <p className="class-card--previous__instructor-name label">{pastClass.instructor.name}</p>
                    </div>
                    <p className="class-card--previous__date body">{pastClass.date}</p>
                </div>
                <Link to={`${pastClass.id}`} />
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