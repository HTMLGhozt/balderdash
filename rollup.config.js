import sucrase from 'rollup-plugin-sucrase';

export default {
  input: 'src/index.js',
  output: {
    dir: './dist',
    sourcemap: true,
    format: 'cjs',
  },
  plugins: [
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['javascript', 'imports'],
    }),
  ],
};
