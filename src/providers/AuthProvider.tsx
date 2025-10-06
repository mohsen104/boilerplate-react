import { AuthContext } from '@/context/AuthContext'
import {
  authGetMe,
  authRefreshToken,
} from '@/features/auth/services/auth.service'
import type { User } from '@/types/auth'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true)

      const hasAccessToken = document.cookie.includes('accessToken')
      const hasRefreshToken = document.cookie.includes('refreshToken')

      try {
        if (hasAccessToken) {
          const res = await authGetMe()
          const me = {
            id: res.id,
            name: res.fullName,
            role: res.role,
            permissions: res.permissions,
          }
          setUser(me)
        } else if (hasRefreshToken) {
          const me = await authRefreshToken()
          setUser(me)
        } else {
          setUser(null)
        }
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  return <AuthContext value={{ user, loading }}>{children}</AuthContext>
}
