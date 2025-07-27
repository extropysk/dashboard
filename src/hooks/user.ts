import { payload } from "@/lib/utils/payload"
import { getItem, removeItem, setItem } from "@/lib/utils/storage"
import { LoginData } from "@/types/user"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const USER_KEY = "user"

interface User {
  id: string
  email: string
  roles: string[]
}

export const useUserQuery = () => {
  return useQuery({
    queryKey: [USER_KEY],
    queryFn: async () => {
      const { user } = await payload.me<User>()
      setItem<User>(USER_KEY, user)
      return user
    },
    initialData: () => getItem<User>(USER_KEY),
  })
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const { user } = await payload.login<User>(data.email, data.password)
      setItem<User>(USER_KEY, user)
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [USER_KEY] })
    },
  })
}

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      await payload.logout()
      removeItem(USER_KEY)
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [USER_KEY] })
    },
  })
}
