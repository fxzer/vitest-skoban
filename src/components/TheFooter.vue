<template>
  <nav inline-flex gap-2 text-xl>
    <button @click="toggleDarkAnimate">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/fxzer/vitest-sokoban"
      target="_blank"
      title="GitHub"
    />
    <a
      i-simple-icons-gitee
      rel="noreferrer"
      href="https://gitee.com/fxzer/vitest-sokoban"
      target="_blank"
      title="Gitee"
    />
  </nav>
</template>
