import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Create a new user with the hashed password
    const user = await prisma.user.create({
        data: {
            email: 'admin@example.com',
            password: hashedPassword,
            firstName: 'SONFACK',
            lastName: 'Nelson Mandela',
            role: 'ADMIN',  // You can use other roles such as MANAGER, AGENT, CLIENT, USER
        },
    });

    // Create an agency and associate it with the user
    const agency = await prisma.agence.create({
        data: {
            nom: 'INSIA Douala',
            userId: user.id,  // Associate agency with user
        },
    });

    // Create a client and associate it with the agency
    const client = await prisma.client.create({
        data: {
            nom: 'Jane',
            prenom: 'Smith',
            email: 'jane.smith@example.com',
            phone: '123456789',
            agencyId: agency.id,  // Associate client with agency
            userId: user.id
        },
    });

    // Create an assurance and associate it with the client and agency
    await prisma.assurance.create({
        data: {
            name: 'Assurance Santé',
            amount: 500.0,
            clientId: client.id,  // Associate with client
            useId: user.id,       // Created by user
            agencyId: agency.id,  // Associate with agency
        },
    });

    console.log('Seed data created successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
