import postcss from 'rollup-plugin-postcss'

// ...

export default {
  // ... 
  plugins: [
    svelte({
      // ...
    }),

    postcss(),
]}