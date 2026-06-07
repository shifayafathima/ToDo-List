import "../style/InputPanel.css";

export default function Display(props) {

    return (

        <div className="singlebox">

            <h2>TODO - LIST
            </h2>

            <ul>

                {
                    props.task.length === 0
                        ?

                        <p className="empty">
                            No Tasks Added
                        </p>

                        :

                        props.task.map((val) => {

                            return (

                                <li
                                    key={val.id}

                                    className={
                                        val.completed
                                            ? "completed"
                                            : ""
                                    }
                                >

                                    <div>

                                        <span>
                                            {val.text}
                                        </span>

                                        <br />

                                        <small>
                                            {val.time}
                                        </small>

                                    </div>

                                    <div className="btns">

                                        <button
                                            className="complete-btn"

                                            onClick={() => {
                                                props.complete(val.id)
                                            }}
                                        >
                                            ✔ Done
                                        </button>

                                        <button
                                            className="delete-btn"

                                            onClick={() => {
                                                props.delete(val.id)
                                            }}
                                        >
                                            x
                                        </button>

                                    </div>

                                </li>
                            )
                        })
                }

            </ul>

        </div>
    )
}