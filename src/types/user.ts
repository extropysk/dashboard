import z from "zod"

export const LOGIN_DATA_SCHEMA = z.object({
  email: z.string().email({ message: "invalidEmail" }),
  password: z.string().min(1, { message: "required" }),
})

export type LoginData = z.infer<typeof LOGIN_DATA_SCHEMA>
