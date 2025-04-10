import { Suspense } from "react";
import { 
            Outlet, 
            Link, 
            NavLink, 
            useLoaderData, 
            Await 
        } from "react-router";
import { requireAuth } from "../../utils";

async function getPreviousClass(params) {
    const response = await fetch(`/api/my-learning/my-classes/${params.classId}`);
    const data = await response.json();

    if(!response.ok) {
        throw {
            message: data.error,
            statusText: response.statusText,
            status: response.status
        }
    }

    return data
}

export async function previousClassLoader({ params, request }) {
    await requireAuth({ request });

    return { pastClassPromise: getPreviousClass(params) }
}

export default function PreviousClass() {
    const { pastClassPromise } = useLoaderData();

    return (
        <Suspense fallback={<p className="title" >Loading your class details...</p>}>
            <Await resolve={pastClassPromise}>
                {resolvedPastClass => {
                    const pastClass = resolvedPastClass.classes[0];
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
                }}
            </Await>
        </Suspense>    
    )
}