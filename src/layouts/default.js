import { Outlet } from "react-router-dom";
import Header  from "../conponents/header";
import Footer from "../conponents/footer";
const Default = () =>{
    return (
        <div>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    );
}
export default Default;