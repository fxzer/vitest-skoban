import { onMounted, onUnmounted } from 'vue'
import { usePlayerStore } from '~/stores'

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToDown,
    movePlayerToUp,
    movePlayerToRight,
  } = usePlayerStore()

  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
      case 'ArrowUp':
        movePlayerToUp()
        break
      case 'ArrowDown':
        movePlayerToDown()
        break
    }
  }
  // window.addEventListener("keyup", handleKeyup);
  onMounted(() => {
    window.addEventListener('keyup', handleKeyup)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyup)
  })
}
