import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';

export default function IncrementByAmount() {
    const count = useSelector((state) => state.counter.value);
    const [increment, setIncrement] = React.useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <span>{count}</span>

                <br/>

                <button
                    aria-label="Decrement-Value"
                    onClick={() => dispatch(incrementByAmount(increment))}
                >
                    Increment by Amount
                </button>

                <br/>

                <input
                label="Increment Amount"
                type="number"
                onChange={(e) => {setIncrement(e.target.value)}}>
                </input>
            </div>
        </div>
    );
}

