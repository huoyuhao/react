import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

const useStore = create(
  persist(
    (set) => ({
      ...initialState,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'my-store', // 唯一名称
      getStorage: () => localStorage, // 可选，默认使用 localStorage
    }
  )
);

export default useStore;