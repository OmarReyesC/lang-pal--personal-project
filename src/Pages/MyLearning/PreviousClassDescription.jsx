import { useOutletContext } from "react-router";

export default function PreviousClassDescription() {

    const context = useOutletContext();

    return (
        <section className="previous-class-brief">
            <div className="class-brief__date-time body">
                <p className="label">Date:</p>
                <div>
                    <p className="class-brief__date">{context.date}</p>
                    <p className="class-brief__time">{context.time}</p>
                </div>
            </div>
            <div className="class-brief__description body">
                <p className="label">Description:</p>
                <p className="body">{context.description}</p>
            </div>
        </section>
    )
}