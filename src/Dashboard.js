import React from "react";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="content-wrapper" style={{ "minHeight": '330px' }}>

                <div className="content liveCounter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div class="counterBox">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div class="counterUpdate">
                                                <div class="container-fluid">
                                                    <h3>Registrations Today</h3>
                                                    <span class="mobileCount countColorgray">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div class="counterBox">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div class="counterUpdate">
                                                <div class="container-fluid">
                                                    <h3>Vaccinations Today</h3>
                                                    <span class="mobileCount countColorgray">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div class="counterBox">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div class="counterUpdate">
                                                <div class="container-fluid">
                                                    <h3>Partially Vaccinated Today</h3>
                                                    <span class="mobileCount countColororange">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div class="counterBox">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div class="counterUpdate">
                                                <div class="container-fluid">
                                                    <h3>Fully Vaccinated Today</h3>
                                                    <span class="mobileCount countColormantis">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Section Container */}
                <div className="content">
                    <div className="container-fluid main-card-block">
                        {/* Total Vaccination Doses */}
                        <div className="row">
                            <div className="col-6 col-sm-12 margin-b cardblockcls col-lg-4">
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span class="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob accessibility-plugin-ac">
                                            Total Vaccination Doses
                                        </p>
                                        <h3 className="accessibility-plugin-ac">1,29,55,83,137</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted accessibility-plugin-ac">Dose 1</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">80,65,96,738</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted accessibility-plugin-ac">Dose 2</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">48,89,86,399</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Total Vaccination Doses */}
                            <div className="col-6 col-sm-12 margin-b cardblockcls col-lg-4">
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span class="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob accessibility-plugin-ac">
                                            Site Conducting Vaccination
                                        </p>
                                        <h3 className="accessibility-plugin-ac">1,29,55,83,137</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted accessibility-plugin-ac">Government</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">80,65,96,738</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted accessibility-plugin-ac">Private</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">48,89,86,399</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Total Registration */}
                            <div className="col-6 col-sm-12 margin-b cardblockcls col-lg-4">
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span class="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob accessibility-plugin-ac">
                                            Total Registration
                                        </p>
                                        <h3 className="accessibility-plugin-ac">1,29,55,83,137</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted accessibility-plugin-ac">Age 18-44</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">80,65,96,738</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted accessibility-plugin-ac">Age 45+</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">48,89,86,399</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div >
        );
    }
}

export default Dashboard;