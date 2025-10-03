import { http, HttpResponse } from 'msw'
import { mockUsers } from '../data/mockUsers'

export const usersHandlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(mockUsers)
  }),

  http.get('/api/users/:id', ({ params }) => {
    const { id } = params
    const user = mockUsers.find((user) => user.id === parseInt(id as string))

    if (!user) {
      return HttpResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return HttpResponse.json(user)
  }),
]
