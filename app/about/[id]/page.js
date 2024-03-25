import { redirect } from 'next/navigation';
import React from 'react'

const Id = ({params}) => {

    console.log(params);

    // === -> not work
    if (params.id == 3) {
        redirect('/');
    }

  return (
    <div>ID</div>
  )
}

export default Id;