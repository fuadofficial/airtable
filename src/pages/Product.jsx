import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const Product = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('companyName'));
  console.log('id', params);
  return (
    <div>
      {params.id ? <h1>this is product single page</h1> : <h1>this is product multi page</h1>}
    </div>
  )
}

export default Product