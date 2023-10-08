import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h2 className='text-2xl '>Root</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;