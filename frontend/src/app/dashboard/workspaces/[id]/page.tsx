import React from 'react'

export const page = ({params}: {params: {id: string}}) => {
  return (
    <div>Workspace {params.id}</div>
  )
}
