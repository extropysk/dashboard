import z from "zod"

export const LOGIN_DATA_SCHEMA = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Required" }),
})

export type LoginData = z.infer<typeof LOGIN_DATA_SCHEMA>
