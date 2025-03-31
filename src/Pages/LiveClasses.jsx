import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import groupsIconUrl from "../assets/groups.svg"

export default function LiveClasses() {
    
    const [liveClasses, setLiveClasses] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const levelFilter = searchParams.get('level');
    const classesForDisplay = levelFilter 
        ? liveClasses.filter(liveClass => liveClass.level === levelFilter) 
        : liveClasses;

    const activeFilterStyle = {
        background: 'var(--color-neutral-10)',
        color: 'var(--color-neutral-100)'
    }
    
    useEffect(() => {
        async function fetchClasses() {
            try {
                const response = await fetch('/api/classes');
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Response status: ${response.status}: ${errorText}`);
                }

                const data = await response.json();
                setLiveClasses(data.classes);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchClasses();
    }, [])

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
                <Link to={`${liveClass.id}`} />
            </article>
        )
    } )
        

    return (
        <main className="live-classes" >
            <h1 className="live-classes__title headline" >Find the best class for you</h1>
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
        </main>
    );
}