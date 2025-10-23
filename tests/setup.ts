import { vi } from 'vitest'

vi.stubGlobal('useRuntimeConfig', () => ({
  apiBase: 'http://localhost:3000',
  env: 'test',
}))

vi.stubGlobal('$fetch', vi.fn().mockResolvedValue({ id: '123', name: 'Alice' }))