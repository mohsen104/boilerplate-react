import { api } from '@/config/axios-config'
import { useQuery } from '@tanstack/react-query'

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await api.get('/users'),
  })

  return <div>HomePage</div>
}
