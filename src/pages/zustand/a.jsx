import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

function RemoveBear() {
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  return <button onClick={removeAllBears}>removeAllBears</button>
}

export default function Page()  {
  return (
    <>
      <div className='flex flex-col items-start'>
        <BearCounter />
        <Controls />
        <RemoveBear />
      </div>
    </>
  )
}