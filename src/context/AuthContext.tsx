import { createContext, useContext } from 'react'
import type { User } from '@/types/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

export const useAuthContext = () => useContext(AuthContext)
