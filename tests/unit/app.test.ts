import { describe, it, expect } from 'vitest'
import App from '../../app/app.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('app.vue', () => {
  it('can mount the app', async () => {
    const page = await mountSuspended(App)
    expect(page.html()).toContain('Recent Users')
  })
})

