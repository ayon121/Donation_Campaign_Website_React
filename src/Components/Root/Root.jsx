import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h1 className="text-2xl"> Root</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;