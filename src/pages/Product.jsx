import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import Container from '../layout/Container';

const Product = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  console.log('comany name:', searchParams.get('companyName'));
  console.log('id', params);
  console.log(location, "location");
  return (
    <Container>
      <div>
        {params.id ? <h1>this is product single page</h1> : <h1>this is product multi page</h1>}
      </div>
    </Container>
  )
}

export default Product