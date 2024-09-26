"use client";

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/"
import { Input } from "@/components/"
import { Label } from "@/components/"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { UserLoginSchema, UserLoginType } from "@/schemas";
import { useTransition } from "react";
import { userLoginAction } from "@/actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks";



export function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginType>({
        resolver: zodResolver(UserLoginSchema)
    })
    const router = useRouter();
    const { toast } = useToast();

    async function handleLogin(data: UserLoginType) {
        startTransition(async () => {
            const response = await userLoginAction(data);
            if (response && response.id) {
                toast({
                    title: "Connexion effectuée",
                    description: `Bonjour ${response.firstName} vous avez connecté à votre espace avec succès`,
                })
                router.push("/app");

            } else {
                toast({
                    title: "Problème de connexion",
                    description: `Votre mot de passe ou email est incorrecte, verfier et essayer a nouveau!`,
                })
            }
        })
    }
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Bienvenu à nouveau</CardTitle>
                <CardDescription>
                    Entrer votre mot de passe et votre email pour vous connecter
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            {...register("email")}
                        />
                        {errors.email ? <p className="text-sn text-red-400">{errors.email.message}</p> : null}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Mot de passe oubliê?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            {...register("password")}
                        />
                        {errors.password ? <p className="text-sn text-red-400">{errors.password.message}</p> : null}
                    </div>
                    <Button
                        type="submit"
                        className="w-full mt-10"
                        disabled={isPending}
                    >
                        Connexion
                        {isPending ? <Loader2 className="animate-spin" /> : null}
                    </Button>

                </form>
            </CardContent>
        </Card>
    )
}
