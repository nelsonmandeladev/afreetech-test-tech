"use server";

import { sessionOptions } from "@/lib";
import { UserLoginType } from "@/schemas";
import { userLogin } from "@/services";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export async function getSession() {
    return await getIronSession<{ userId: string }>(cookies(), sessionOptions);
}

export async function logout() {
    const session = await getSession();
    session.destroy();
    revalidatePath("/");
}

export async function userLoginAction(data: UserLoginType) {
    const user = await userLogin(data)
    if (user) {
        const session = await getSession();
        session.userId = user.id
        await session.save();
        return user
    }

    return null
}