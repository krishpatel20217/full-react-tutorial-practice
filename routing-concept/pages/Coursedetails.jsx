import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {
    const params = useParams()
  return (
    <div>
        {params.id}
      course detail
    </div>
  )
}

export default Coursedetails
