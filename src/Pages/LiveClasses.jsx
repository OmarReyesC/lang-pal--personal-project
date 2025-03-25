import { useEffect, useState } from "react";
import groupsIconUrl from "../assets/groups.svg"

export default function LiveClasses() {
    
    const [liveClasses, setLiveClasses] = useState([]);
    
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

    const liveClassesCards = liveClasses.map( liveClass => {
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
            </article>
        )
    } )
        

    return (
        <main className="live-classes" >
            <h1 className="live-classes__title headline" >Find the best class for you</h1>
            <div className="live-classes__content">
                <div className="live-classes__filters" >
                    <div className="live-classes__level-filters" >
                        <button className="level-filter-item label" >A1</button>
                        <button className="level-filter-item label" >A2</button>
                        <button className="level-filter-item label" >B1</button>
                        <button className="level-filter-item label" >B2</button>
                        <button className="level-filter-item label" >C1</button>
                    </div>
                    <button className="level-filter-clear label" >Clear filters</button>
                </div>
                <div className="live-classes__display" >
                    {liveClassesCards}
                </div>
            </div>
        </main>
    );
}