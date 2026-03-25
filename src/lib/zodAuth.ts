import {z} from "zod"

export const loginSchema = z.object({
    email: z.email("Invalid Email"),
    password: z.string().min(6, "Min 6 character")
})

export type loginform = z.infer<typeof loginSchema>