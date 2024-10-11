import { create } from 'zustand'

export const useDataStore = create((set, get) => ({
  todos: ["Do some router demo", "Wake the dog", "Show Zustand"],
  bears: 10,
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  getStats: () => `Todos: ${get().todos.length}, Bears: ${get().bears}`
}))