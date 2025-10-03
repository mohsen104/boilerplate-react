// import { useState } from 'react'
// import { useAuth } from './useAuth'

// export const useLogin = () => {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const { refetchUser } = useAuth()

//   const login = async (credentials: { email: string; password: string }) => {
//     try {
//       setLoading(true)
//       setError(null)

//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       })

//       if (!response.ok) {
//         throw new Error('Login failed')
//       }

//       const { token } = await response.json()
      
//       localStorage.setItem('accessToken', token)
      
//       await refetchUser()
      
//       return { success: true }
//     } catch (err) {
//       const message = err instanceof Error ? err.message : 'Login failed'
//       setError(message)
//       return { success: false, error: message }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { login, loading, error }
// }