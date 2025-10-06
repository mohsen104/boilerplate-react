import { api } from '@/config/axios-config'
import type { Permission, Role } from '@/types/auth'

export const authGetMe = async (): Promise<{
  id: string
  fullName: string
  role: Role
  permissions: Permission[]
}> => {
  const res = await api.get('/auth/me')
  return res.data
}

export const authRefreshToken = async () => {
  const res = await api.post('/auth/refresh')
  return res.data
}
