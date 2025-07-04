/* eslint-disable @typescript-eslint/require-await */
import { getItem, removeItem, setItem } from "@/lib/utils/storage"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const USER_KEY = "user"

interface User {
  email: string
}

export const useUserQuery = () => {
  return useQuery({
    queryKey: [USER_KEY],
    queryFn: () => getItem<User | null>(USER_KEY, null),
  })
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: User) => {
      setItem<User>(USER_KEY, data)
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
      removeItem(USER_KEY)
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [USER_KEY] })
    },
  })
}
