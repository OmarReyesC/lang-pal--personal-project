import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await } from "react-router";
import groupsIconUrl from "../assets/groups.svg";

async function getClasses() {
    const res = await fetch('/api/classes');
    const data = await res.json();
    if(!res.ok) {
        throw {
            message: data.error,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data;
}

export function liveClassesLoader() {
    const classesPromise = getClasses();
    return { classesPromise }
}

export default function LiveClasses() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { classesPromise } = useLoaderData();
    const levelFilter = searchParams.get('level');
    
    const activeFilterStyle = {
        background: 'var(--color-neutral-10)',
        color: 'var(--color-neutral-100)'
    }

    return (
        <main className="live-classes" >
            <h1 className="live-classes__title headline" >Find the best class for you</h1>
            <Suspense fallback={<h2>Loading live classes</h2>} >
                <Await
                    resolve={classesPromise}
                >
                    {(resolvedClasses) => {
                        const classesForDisplay = levelFilter 
                            ? resolvedClasses.classes.filter(liveClass => liveClass.level === levelFilter) 
                            : resolvedClasses.classes;

                        const liveClassesCards = classesForDisplay.map( liveClass => {
                            return (
                                <article className="class-card" key={liveClass.id}>
                                    <div className="class-card__header">
                                        <div className="class-card__level title">{liveClass.level}</div>
                                        <p className="title">{liveClass.lessonName}</p>
                                    </div>
                                    <div className="class-card__body">
                                        <div className="class-card__body-start">
                                            <img className="class-card__instructor-pic" src={liveClass.instructor.picture} alt={`Profile picture of `} />
                                            <div className="class-card__time-name">
                                                <div className="class-card__date-time">
                                                    <p className="label">Today</p>
                                                    <p className="body">{liveClass.time}</p>
                                                </div>
                                                <p className="body">{liveClass.instructor.name}</p>
                                            </div>
                                        </div>
                                        <div className="class-card__body-end">
                                            <div className="class-card__group-size">
                                                <p className="label">{liveClass.enrolledStudents}/5</p>
                                                <img src={groupsIconUrl} alt="" />
                                            </div>
                                            <p className="title">${liveClass.price}.00</p>
                                        </div>
                                    </div>
                                    <Link 
                                        to={`${liveClass.id}`} 
                                        state={{
                                            levelFilter
                                        }}    
                                    />
                                </article>
                            )
                        } )

                        return (
                            <div className="live-classes__content">
                                <div className="live-classes__filters" >
                                    <div className="live-classes__level-filters" >
                                        <button 
                                            onClick={() => {setSearchParams({level: 'A1'})}} 
                                            className='level-filter-item label' 
                                            style={levelFilter === 'A1' ? activeFilterStyle : null} 
                                        >
                                            A1
                                        </button>
                                        <button 
                                            onClick={() => {setSearchParams({level: 'A2'})}} 
                                            className='level-filter-item label' 
                                            style={levelFilter === 'A2' ? activeFilterStyle : null} 
                                        >
                                            A2
                                        </button>
                                        <button 
                                            onClick={() => {setSearchParams({level: 'B1'})}} 
                                            className='level-filter-item label' 
                                            style={levelFilter === 'B1' ? activeFilterStyle : null} 
                                        >
                                            B1
                                        </button>
                                        <button 
                                            onClick={() => {setSearchParams({level: 'B2'})}} 
                                            className='level-filter-item label' 
                                            style={levelFilter === 'B2' ? activeFilterStyle : null} 
                                        >
                                            B2
                                        </button>
                                        <button 
                                            onClick={() => {setSearchParams({level: 'C1'})}} 
                                            className='level-filter-item label' 
                                            style={levelFilter === 'C1' ? activeFilterStyle : null} 
                                        >
                                            C1
                                        </button>
                                        
                                    </div>
                                    {levelFilter &&
                                    <button 
                                        onClick={() => {setSearchParams({})}} 
                                        className="level-filter-clear label" 
                                    >
                                        Clear filters
                                    </button>}
                                </div>
                                <div className="live-classes__display" >
                                    {liveClassesCards}
                                </div>
                            </div>
                        )
                    }}
                </Await>
            </Suspense>
            
        </main>
    );
}