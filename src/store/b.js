import { create } from 'zustand';
import log from './loggerMiddleware';
// import anotherMiddleware from './anotherMiddleware';

const useStore = create(
  log((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);

export default useStore;
