import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h2>Error 404</h2>
      <h2>Page not Found</h2>
      <Link to='/' className='btn'>
        Back home
      </Link>
    </section>
  );
};
export default Error;
