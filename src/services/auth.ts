import { prisma } from "@/lib";
import { UserLoginType } from "@/schemas";
import bcrypt from 'bcrypt';

export async function userLogin(data: UserLoginType) {
    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email: data.email,
            }
        });

        const isMatch = await bcrypt.compare(data.password, user.password);

        if (isMatch) {
            return user
        }
        return null
    } catch (error) {
        console.log(error);
        return
    }

}


export async function getUserById(id: string) {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            id: id,
        },
        select: {
            agency: true,
            email: true,
            id: true,
            firstName: true,
            lastName: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            assurances: true
        }
    });

    return user
}