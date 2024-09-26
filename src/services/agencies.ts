import { prisma } from "@/lib";

export async function listAgenciesByUser(userId: string) {
    return await prisma.agence.findMany({
        where: {
            userId: userId
        },
        select: {
            clients: true,
            assurences: true,
            id: true,
            createdAt: true,
            nom: true,
            user: true,
            updatedAt: true
        }
    })

}

export async function getAgencyById(id: string) {
    try {
        return await prisma.agence.findFirst({
            where: {
                id: id
            },
            select: {
                clients: true,
                assurences: true,
                id: true,
                createdAt: true,
                nom: true,
                user: true,
                updatedAt: true
            }
        })
    } catch (error) {
        console.log({ error })
        return null
    }
}