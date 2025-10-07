export default defineEventHandler( async () => {

// Code for testing 'loading' and 'error' states
//   await new Promise(resolve => setTimeout(resolve, 2000))
//   throw createError({
//     statusCode: 500,
//     statusMessage: 'Oh no!'
//   })

  return [{
    id: 1,
    title: "Learn Nuxt",
    done: false,
    date: '03/10/2025'
  },
  {
    id: 2,
    title: "Learn Vue",
    done: false,
    date: '05/09/2025'
  }]
})