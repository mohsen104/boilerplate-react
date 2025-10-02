import type { FC, ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'
import type { Role, Permission } from '@/types/auth'

interface Props {
  children: ReactNode
  allowedRoles?: Role[]
  requiredPermissions?: Permission[]
  fallback?: ReactNode
}

export const AccessControl: FC<Props> = ({
  children,
  allowedRoles,
  requiredPermissions,
  fallback = null,
}) => {
  const { user } = useAuth()

  if (!user) return <>{fallback}</>

  // RBAC
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <>{fallback}</>
  }

  // PBAC
  if (
    requiredPermissions &&
    !requiredPermissions.every((perm) => user.permissions.includes(perm))
  ) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
