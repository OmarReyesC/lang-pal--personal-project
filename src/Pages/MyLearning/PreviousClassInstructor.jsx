import { useOutletContext } from "react-router";
import blackStarIcon from '../../assets/icon/star-black.svg';

export default function PreviousClassInstructor() {
    const context = useOutletContext();

    return (
        <section className="previous-class-instructor">
            <div className="previous-class-instructor-start">
                <img className="previous-class-instructor-pic" src={context.instructor.picture} alt={`Picture of ${context.instructor.name}`} />
                <div className="previous-class-instructor-score">
                    <p className="previous-class-instructor-points body">{context.instructor.score}</p>
                    <img src={blackStarIcon} alt="" />
                </div>
            </div>
            <p className="previous-class-instructor-name title">{context.instructor.name}</p>
            <div className="previous-class__instructor-details">
                <p className="label">Speaks:</p>
                <p className="body">{context.instructor.spokenLanguages}</p>
            </div>
            <div className="previous-class__instructor-details">
                <p className="label">Interests:</p>
                <p className="body">{context.instructor.interests}</p>
            </div>
        </section>
    )
}