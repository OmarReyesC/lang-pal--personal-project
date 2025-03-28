import { useEffect, useState } from "react";
import { Outlet, Link, useParams, NavLink } from "react-router";

export default function PreviousClass() {
    const params = useParams();

    const [pastClass, setPastClass] = useState(null);

    useEffect(() => {
        async function fetchPastClass() {
            const response = await fetch(`/api/my-learning/my-classes/${params.classId}`);
            const data = await response.json();

            setPastClass(data.classes[0]);
        }
        fetchPastClass();
    }, []);

    if(!pastClass) {
        return (
            <h1>Loading. Please wait...</h1>
        )
    }


    return (
        <>
            <Link
                to={'..'}
                relative="path"
                className="back-button body"
            >
                Back to my previous classes
            </Link>

            <section className="previous-class__info">
                <section className="previous-class__header">
                    <div className="previous-class__generals">
                        <div className="previous-class__level title">{pastClass.level}</div>
                        <h2 className="previous-class__title title">{pastClass.lessonName}</h2>
                    </div>
                    <nav className="previous-class__nav">
                        <NavLink
                            to='.'
                            className='navbar-item label'
                            end
                        >
                            Description
                        </NavLink>
                        <NavLink
                            to='instructor'
                            className='navbar-item label'
                        >
                            Instructor details
                        </NavLink>
                    </nav>
                </section>

                <Outlet 
                    context={pastClass}
                />
            </section>
        </>
    )
}