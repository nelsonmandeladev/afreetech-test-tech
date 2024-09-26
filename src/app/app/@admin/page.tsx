import { getSession } from '@/actions';
import { getUserById, listAgenciesByUser } from '@/services';
import React from 'react'
import { AgenciesList } from './components';
import { Agence } from '@/types';

export default async function AdminHomePage() {
    const session = await getSession();

    const user = await getUserById(session.userId);
    const agencies = await listAgenciesByUser(user.id);

    return (
        <div className='w-full h-full'>
            <h3 className="text-gray-700 text-2xl font-semibold">
                Bonjour <span className='text-gray-900'>{user.firstName} {user.lastName}</span> 👋🏾
            </h3>
            <div className="">

            </div>
            <div className="mt-10">
                <AgenciesList
                    agencies={agencies as unknown as Agence[]}
                />
            </div>
        </div>
    )
}
