import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment-Value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement-Value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
