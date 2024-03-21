import "../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../../static/admin/assets//plugins/chartist-js/dist/chartist.min.css";
import "../../../static/admin/assets//plugins/chartist-js/dist/chartist-init.css";
import "../../../static/admin/assets//plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css";
import "../../../static/admin/assets//plugins/css-chart/css-chart.css";
import "../../../static/admin/assets//plugins/toast-master/css/jquery.toast.css";
import "../../../static/admin/css/style.css";
import "../../../static/admin/css/colors/blue.css";

import LeftSideBars from "../../organism/admin/lifeside";
import NavbarAdmin from "../../organism/admin/navbar";

import Dashboard from "../admin/dashboard";

const Index = () => {
    return (
        <body className="fix-header fix-sidebar card-no-border">
            <div id="main-wrapper">
                <header className="topbar">
                 <NavbarAdmin/>
                </header>
            <LeftSideBars/>
            <Dashboard/>
            </div>
            <script src="../../../static/admin/assets/plugins/jquery/jquery.min.js"></script>
            <script src="../../../static/admin/assets/plugins/bootstrap/js/popper.min.js"></script>
            <script src="../../../static/admin/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/admin/js/jquery.slimscroll.js"></script>
            <script src="../../../static/admin/js/waves.js"></script>
            <script src="../../../static/admin/js/sidebarmenu.js"></script>
            <script src="../../../static/admin/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
            <script src="../../../static/admin/js/custom.min.js"></script>
            <script src="../../../static/admin/assets/plugins/chartist-js/dist/chartist.min.js"></script>
            <script src="../../../static/admin/assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
            <script src="../../../static/admin/assets/plugins/echarts/echarts-all.js"></script>
            <script src="../../../static/admin/assets/plugins/toast-master/js/jquery.toast.js"></script>
            <script src="../../../static/admin/js/dashboard1.js"></script>
            <script src="../../../static/admin/js/toastr.js"></script>
           
            <script src="../../../static/admin/assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>

        </body>
    )
}

export default Index;

