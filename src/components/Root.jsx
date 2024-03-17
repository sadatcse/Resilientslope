
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './Common/Header';
import Footer from './Common/Footer';




const Root = () => {

    return (
        <div >
            <Header></Header>
            <Toaster />
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};


export default Root;