import { Suspense } from "react";
import { 
        Link,
        useLoaderData,
        Await
        } from "react-router";
import { requireAuth } from "../../utils";

async function getMyClasses() {
    const response = await fetch('/api/my-learning/my-classes');
    const data = await response.json();
    if (!response.ok) {
        throw {
            message: data.error,
            statusText: response.statusText,
            status: response.status
        }
    }

    return data
}

export async function myClassesLoader(obj) {
    
    await requireAuth(obj);
    
    return { pastClassesPromise: getMyClasses() }
}

export default function MyClasses() {
    const { pastClassesPromise } = useLoaderData();

    function renderPastClasses(resolvedPastClasses) {
        const previousClassesDisplay = resolvedPastClasses.classes.map(pastClass => {
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
            <div className="previous-classes__list">
                {previousClassesDisplay}
            </div>
        )
    }


    return (
        <section className="my-classes">
            <h2 className="previous-classes__title title">My previous classes</h2>
            <Suspense fallback={<p className="title" >Just one moment. We are loading your past classes...</p>} >
                <Await resolve={pastClassesPromise} >
                    { renderPastClasses }
                </Await>
            </Suspense>
        </section>
    )
}