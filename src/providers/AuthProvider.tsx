import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  return children
}
