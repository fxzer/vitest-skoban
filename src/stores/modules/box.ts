import { defineStore } from 'pinia'

export const useBoxStore = defineStore('box', () => {
  const box = reactive({
    x: 2,
    y: 2,
  })

  return { box, }
})
