import { Outlet, Link, NavLink, useLoaderData } from "react-router";
import { requireAuth } from "../../utils";

export async function previousClassLoader({ params, request }) {
    await requireAuth({ request });

    const response = await fetch(`/api/my-learning/my-classes/${params.classId}`);
    if(!response.ok) {
        throw {
            message: 'Failed to fetch class',
            statusText: response.statusText,
            status: response.status
        }
    }

    const data = await response.json();
    return data
}

export default function PreviousClass() {
    const pastClass = useLoaderData().classes[0];

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