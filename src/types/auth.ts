export type Role = 'admin' | 'editor' | 'viewer'

export type Permission =
  | 'read:users'
  | 'write:users'
  | 'delete:users'
  | 'read:products'
  | 'write:products'

export interface User {
  id: string
  name: string
  role: Role
  permissions: Permission[]
  token?: string
}
