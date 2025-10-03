import { queryClient } from "@/lib/query"
import { useAuth } from "./useAuth"
import { useMutation } from "@tanstack/react-query"

export const useLoginMutation = () => {
  const { refetchUser } = useAuth()

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      return response.json()
    },
    onSuccess: (data) => {
      document.cookie = `accessToken=${data.token}; path=/; Secure; SameSite=Strict`
      
      queryClient.invalidateQueries({ queryKey: ['user'] })
      refetchUser()
    },
  })
}