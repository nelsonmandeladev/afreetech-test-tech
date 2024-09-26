import { getSession } from '@/actions';
import { getUserById } from '@/services';
import { redirect } from 'next/navigation';
import React from 'react'


interface MainAppLayoutProps {
    admin: React.ReactNode,
    agent: React.ReactNode,
    manager: React.ReactNode,
}
export default async function MainAppLayout(props: MainAppLayoutProps) {

    const { admin, agent, manager } = props;

    const session = await getSession();

    if (!session.userId) {
        redirect("/login")
    }

    const user = await getUserById(session.userId);

    if (!user) {
        redirect("/login")
    }

    const children: React.ReactNode =
        user.role === "ADMIN" ? admin :
            user.role === "MANAGER" ? manager :
                agent

    return (
        <div className='w-full p-5'>
            {children}
        </div>
    )
}
