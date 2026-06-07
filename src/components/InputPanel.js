import { useState } from 'react';

export default function InputPanel(props) {

    const [data, setData] = useState("");

    return (

        <div className='singleBox'>

            <input
                type='text'
                placeholder='Enter your task'
                value={data}

                onChange={(ent) => {
                    setData(ent.target.value)
                }}
            />

            <button
                onClick={() => {

                    props.send(data);

                    setData("");
                }}
            >
                Add
            </button>

        </div>
    )
}