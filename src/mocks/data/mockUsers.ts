export interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'user1',
    email: 'user1@example.com',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'user2',
    email: 'user2@example.com',
    createdAt: '2024-01-16T14:20:00Z',
  },
]
