import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';


const SharedLayout = () => {
  return (
    <>
        <section>
            <Navbar />
            <Outlet /> {/*Outlet eh onde aparecera o conteudo da pagina em questao*/}
        </section>
    </>
  );
}

export default SharedLayout