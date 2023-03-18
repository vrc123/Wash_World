import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from './counterSlice';
import type { RootState } from '../store'; 


export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(decrement());
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div>
      <div>
        <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
      </div>
    </div>
  );
}
