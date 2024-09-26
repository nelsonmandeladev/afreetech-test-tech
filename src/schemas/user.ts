import { z, string, object } from "zod"

export const UserLoginSchema = object({
    email: string({ required_error: "Champ requis" })
        .min(1, "Champ requis")
        .email("Invalid email"),
    password: string({ required_error: "Champ requis" })
        .min(1, "Champ requis"),
});

export type UserLoginType = z.infer<typeof UserLoginSchema>;