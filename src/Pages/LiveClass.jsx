import { Suspense } from "react";
import { 
        Link, 
        useLocation, 
        useLoaderData, 
        Await
    } from "react-router";

import groupsIconUrl from "../assets/groups.svg";
import starIconUrl from "../assets/icon/star.svg";

export async function liveClassLoader(params) {
    const response = await fetch(`/api/classes/${params.classId}`);
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

export default function LiveClass() {
    const { liveClassPromise } = useLoaderData();

    const prevLevelFilter = useLocation().state?.levelFilter || null;

    function renderLiveClass(resolvedLiveClass) {
        const liveClass = resolvedLiveClass.classes;

        return (
            <>
                <Link 
                    to={`..${prevLevelFilter ? `?level=${prevLevelFilter}` : ''}`}
                    relative="path" 
                    className="back-button body" 
                >
                    Back to {prevLevelFilter ? prevLevelFilter : 'all'} classes
                </Link>
                <section className="live-class__info">
                    <section className="live-class__brief">
                        <div className="live-class__generals">
                            <div className="live-class__header">
                                <div className="live-class__level title">{liveClass.level}</div>
                                <h1 className="live-class__title headline">{liveClass.lessonName}</h1>
                            </div>
                            <div className="live-class__details">
                                <div className="live-class__details-start">
                                    <div className="live-class__date-time">
                                        <p className="label">Today</p>
                                        <p className="body">{liveClass.time}</p>
                                    </div>
                                    <div className="live-class__group-size">
                                        <p className="label">{liveClass.enrolledStudents}/5</p>
                                        <img src={groupsIconUrl} alt="" />
                                    </div>
                                    <p className="live-class__price label">{`$ ${liveClass.price}.00`}</p>
                                </div>
                                <button className="primary-button">Book this class</button>
                            </div>
                        </div>
                        <div className="live-class__description">
                            <p className="body">{liveClass.description}</p>
                        </div>
                    </section>
                    <section className="live-class__instructor">
                        <div className="live-class__instructor-header">
                            <img className="live-class__instructor-pic" src={liveClass.instructor.picture} alt={`Picture of ${liveClass.instructor.name}`} />
                            <div className="live-class__instructor-generals" >
                                <p className="live-class__instructor-name title">{liveClass.instructor.name}</p>
                                <div className="live-class__instructor-score">
                                    <p className="live-class__instructor-points body">{liveClass.instructor.score}</p>
                                    <img src={starIconUrl} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="live-class__instructor-body">
                            <div className="live-class__instructor-details">
                                <p className="label">Speaks:</p>
                                <p className="body">{liveClass.instructor.spokenLanguages}</p>
                            </div>
                            <div className="live-class__instructor-details">
                                <p className="label">Interests:</p>
                                <p className="body">{liveClass.instructor.interests}</p>
                            </div>
                        </div>
                    </section>
                </section>
            </>
        );
    }

    return (
        <main className="live-class-main" >
            <Suspense fallback={<p className="title" >Loading class info...</p>}>
                <Await resolve={liveClassPromise} >
                    {renderLiveClass}
                </Await>
            </Suspense>
            
        </main>
    )
}