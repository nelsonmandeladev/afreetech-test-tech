import { getAgencyById } from '@/services';
import { notFound } from 'next/navigation';
import React from 'react'

interface AgencyDetailPageProps {
  params: {
    id: string
  }
}
export default async function AgencyDetailPage(props: AgencyDetailPageProps) {
  const { params: { id } } = props;

  const agency = await getAgencyById(id);

  if (!agency) {
    return notFound();
  }
  return (
    <div className='w-full h-full'>

    </div>
  )
}
