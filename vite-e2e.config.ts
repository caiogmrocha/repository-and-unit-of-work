import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    dir: 'tests',
    // environment: 'e2e',
    setupFiles: './tests/vitest-environment-e2e',
  },
});