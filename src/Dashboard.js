import React from "react";
import { connect } from 'react-redux';
import isExists from './functions/isExists';
import { getPublicStats, getStats, getDistrict } from './actions/DashboardAction';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            districtArray: [{
                district_name: 'Select District',
                district_id: ''
            }]
        };
    }

    componentDidMount() {
        this.props.getStats();
        this.props.getPublicStats();
    }

    renderSelectField(field) {
        const {
            label,
            options,
            id,
            meta: {
                touched,
                error
            }
        } = field;
        return (
            <div className="form-group">
                <select
                    id={id}
                    placeholder={label}
                    className="form-control custom-select"
                    {...field.input}>
                    {options.map((option, key) => {
                        return (
                            <option key={key} value={option.value}>
                                {option.text}
                            </option>
                        );
                    })}
                </select>
                <div className="help-block text-danger">
                    {touched
                        ? error
                        : ''}
                </div>
            </div>
        );
    }

    selectState(e) {
        var state_code = e.target.value;
        this.props.getPublicStats(state_code);
        this.props.getStats(state_code);
        this.props.getDistrict(state_code, (response) => {
            response.unshift({
                district_name: 'Select District',
                district_id: ''
            });
            this.setState({
                districtArray: response
            });
        });
    }

    districtSelected(e) {
        var district_code = e.target.value;
        console.log("district_code", district_code);
    }

    render() {
        const { get_public_stats, get_stats, get_state } = this.props;
        console.log("get_stats in render function", get_stats);
        var districtArray = this.state.districtArray;
        return (
            <div className="content-wrapper" style={{ "minHeight": '330px' }}>
                <div className="content liveCounter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div className="counterBox">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div className="counterUpdate">
                                                <div className="container-fluid">
                                                    <h3>Registrations Today</h3>
                                                    <span className="mobileCount countColorgray">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div className="counterBox">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div className="counterUpdate">
                                                <div className="container-fluid">
                                                    <h3>Vaccinations Today</h3>
                                                    <span className="mobileCount countColorgray">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div className="counterBox">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div className="counterUpdate">
                                                <div className="container-fluid">
                                                    <h3>Partially Vaccinated Today</h3>
                                                    <span className="mobileCount countColororange">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 padlr15px mb-3">
                                <div className="counterBox">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-lg-7 col-xl-7 p-0">
                                            <div className="counterUpdate">
                                                <div className="container-fluid">
                                                    <h3>Fully Vaccinated Today</h3>
                                                    <span className="mobileCount countColormantis">26,61,758
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xl-5 p-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 clearfix">
                            <div className="float-right">
                                <div className="cm-state d-inline-block mr-2">
                                    <div className="form-group" style={{ 'width': '210px' }}>
                                        <select className="custom-select" name="state" id="state" onClick={(e) => { this.selectState(e) }}>
                                            <option value className="accessibility-plugin-ac">Select State</option>
                                            <option value={1}>Andaman and Nicobar Islands</option>
                                            <option value={2}>Andhra Pradesh</option>
                                            <option value={3}>Arunachal Pradesh</option>
                                            <option value={4}>Assam</option><option value={5}>Bihar</option><option value={6}>Chandigarh</option><option value={7}>Chhattisgarh</option><option value={8}>Dadra and Nagar Haveli</option><option value={37}>Daman and Diu</option><option value={9}>Delhi</option><option value={10}>Goa</option><option value={11}>Gujarat</option><option value={12}>Haryana</option><option value={13}>Himachal Pradesh</option><option value={14}>Jammu and Kashmir</option><option value={15}>Jharkhand</option><option value={16}>Karnataka</option><option value={17}>Kerala</option><option value={18}>Ladakh</option><option value={19}>Lakshadweep</option><option value={20}>Madhya Pradesh</option><option value={21}>Maharashtra</option><option value={22}>Manipur</option><option value={23}>Meghalaya</option><option value={24}>Mizoram</option><option value={25}>Nagaland</option><option value={26}>Odisha</option><option value={27}>Puducherry</option><option value={28}>Punjab</option><option value={29}>Rajasthan</option><option value={30}>Sikkim</option><option value={31}>Tamil Nadu</option><option value={32}>Telangana</option><option value={33}>Tripura</option><option value={34}>Uttar Pradesh</option><option value={35}>Uttarakhand</option><option value={36}>West Bengal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cm-district d-inline-block">
                                    <div className="form-group" style={{ 'width': '210px' }}>
                                        <select className="custom-select" name="district" id="district" onClick={(e) => { this.districtSelected(e) }}>
                                            {districtArray.map((option, key) => {
                                                return (
                                                    <option value={option.district_id} key={key}>
                                                        {option.district_name}
                                                    </option>
                                                );
                                            })}
                                        </select>
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
                                        <span className="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob accessibility-plugin-ac">
                                            Total Vaccination Doses
                                        </p>
                                        <h3 className="accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.total : ''}</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted accessibility-plugin-ac">Dose 1</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.tot_dose_1 : ''}</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted accessibility-plugin-ac">Dose 2</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.tot_dose_2 : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Site Conducting Vaccination */}
                            <div className="col-6 col-sm-12 margin-b cardblockcls col-lg-4">
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span className="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob accessibility-plugin-ac">
                                            Site Conducting Vaccination
                                        </p>
                                        <h3 className="accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.sites.total : ''}</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted accessibility-plugin-ac">Government</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.sites.govt : ''}</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted accessibility-plugin-ac">Private</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.sites.pvt : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Total Registration */}
                            <div className="col-6 col-sm-12 margin-b cardblockcls col-lg-4">
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span className="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob accessibility-plugin-ac">
                                            Total Registration
                                        </p>
                                        <h3 className="accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.registration.total : ''}</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted accessibility-plugin-ac">Age 18-44</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.registration.cit_18_45 : ''}</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted accessibility-plugin-ac">Age 45+</small>
                                                <p className="d-block mb-0 font-weight-bold font-2 accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.registration.cit_45_above : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { dashboard } = state;
    return {
        get_public_stats: dashboard.get_public_stats,
        get_stats: dashboard.get_stats,
        get_state: dashboard.get_state,
    }
}

export default connect(mapStateToProps, { getPublicStats, getStats, getDistrict })(Dashboard);