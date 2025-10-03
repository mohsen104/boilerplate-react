import { useAuth } from '@/hooks/useAuth'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  if (!isAuthenticated) return <Navigate to='/login' replace />

  return <>{children}</>
}
