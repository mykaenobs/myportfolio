import create from 'zustand'

const useStore = create(set => ({
  services: [],
  projects: [],
  testimonials: [],
  statics: [],
  modal: false
  // increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  // setServices: (e) => set(state => ({ services: [...state.services, e]}))
}));

export default useStore;