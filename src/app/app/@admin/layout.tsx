import { getSession } from '@/actions'
import { getUserById } from '@/services';
import React, { ReactNode } from 'react'

interface AdminBaseLayoutProps {
    children: ReactNode
}
export default async function AdminLayout(props: AdminBaseLayoutProps) {

    const session = await getSession();

    const user = await getUserById(session.userId);

    if (user.role !== "ADMIN") {
        return (
            <div className="">
                Vous ne pouvez pas voir le contentenu de cette page
            </div>
        )
    }

    return (
        <div className='w-full h-full'>
            {props.children}
        </div>
    )
}
