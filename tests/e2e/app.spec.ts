import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, expect, test } from 'vitest'

describe('app', async () => {
    await setup() // spins up nuxt server instance

    test('contains title as string', async () => {
        const html = await $fetch('/')
        expect(html).toContain('Recent Users')
    })

    test('with playwright', async () => {
        const page = await createPage()
        await page.goto(url('/'), { waitUntil: 'hydration' })
        const text = await page.textContent('h2')
        expect(text).toContain('Recent Users')
    })
})