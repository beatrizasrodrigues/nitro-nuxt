import { defineVitestConfig } from '@nuxt/test-utils/config'
//import { defineConfig } from 'vitest/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        globals: true,
        include: ['tests/unit/**/*.test.{js,ts}', 'tests/integration/**/*.test.{js,ts}'],
        //setupFiles: ['./tests/setup.ts'], // runs before every test file
    }
})