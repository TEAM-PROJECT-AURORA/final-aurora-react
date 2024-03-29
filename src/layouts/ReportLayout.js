import { Outlet } from "react-router";

import ReportLayoutCSS from "./ReportLayout.module.css";
import ReportSidebar from "../components/subSidebar/ReportSidebar";

function ReportLayout() {

    return (
        <>
            <div className={ReportLayoutCSS.reportLayout}>
                <ReportSidebar/>
                <Outlet/>
            </div>
        </>
    );
}

export default ReportLayout;