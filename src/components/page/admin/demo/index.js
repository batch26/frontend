import LeftSideBars from "../../../organism/admin/lifeside";
import NavbarAdmin from "../../../organism/admin/navbar";
import Dashboard from "../dashboard";

const Demo = () => {
    return (
        <div className="fix-header fix-sidebar card-no-border">
        <div id="main-wrapper">
            <header className="topbar">
                <NavbarAdmin/>
            </header>
            <LeftSideBars/>
            <Dashboard title={"Demo"} page={"Home"} title2={"Demo"}/>
        </div>
    </div>
    )
}

export default Demo;