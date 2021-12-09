import React from "react";
import { connect } from 'react-redux';
import isExists from './functions/isExists';
import map from 'lodash/map';
import vcaccinationCategoryGender from './functions/vcaccinationCategoryGender';
import vcaccinationCategoryVaccine from './functions/vcaccinationCategoryVaccine';
import vcaccinationByAge from './functions/vcaccinationByAge';
import aefiReport from './functions/aefiReport';
import ruralUrbanReport from './functions/ruralUrbanReport';
import VaccinationTrend from './Graphs/VaccinationTrend';
import RegistrationTrend from './Graphs/RegistrationTrend';
import vaccinationCoverage from './functions/vaccinationCoverage';
import { getPublicStats, getStats, getDistrict } from './actions/DashboardAction';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, registerables } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Bar } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, ...registerables);

const _ = {
    map: map
};


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
        console.log("state_id", state_code);
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

    renderStateData(vaccinationbystate) {

        vaccinationbystate.sort(function (a, b) {
            return parseFloat(b.total) - parseFloat(a.total);
        });


        return _.map(vaccinationbystate, state_data => {
            return (
                <tr>
                    <td className="title" style={{
                        'width': '50%',
                        'fontSize': '13px',
                        'color': '#007bff',
                        'fontWeight': '500'
                    }}>{state_data.state_name}</td>
                    <td className="text-right" style={{
                        'width': '25%',
                        'fontSize': '15px',
                        'color': '#12226f',
                        'fontWeight': '600'
                    }}>
                        {state_data.today}
                    </td>
                    <td className="text-right" style={{
                        'width': '25%',
                        'fontSize': '15px',
                        'color': '#12226f',
                        'fontWeight': '600'
                    }}>
                        {state_data.total}
                    </td>
                </tr>
            );
        });
    }

    render() {
        const { get_public_stats, get_stats, get_state } = this.props;
        console.log("get_stats in render function", get_public_stats);

        var districtArray = this.state.districtArray;
        var vcaccination_category_gender = vcaccinationCategoryGender(get_public_stats);
        var vcaccination_category_vaccine = vcaccinationCategoryVaccine(get_public_stats);
        var vcaccinationbyage = vcaccinationByAge(get_public_stats);
        var vaccinationbystate = isExists(get_public_stats) ? get_public_stats.getBeneficiariesGroupBy : [];

        const aefi_report = aefiReport(get_public_stats);
        const rural_urban_report = ruralUrbanReport(get_stats);
        const vaccination_coverage = vaccinationCoverage(get_public_stats);


        return (
            <div className="content-wrapper" style={{ "minHeight": '330px' }}>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 clearfix">
                            <div className="float-right">
                                <div className="cm-state d-inline-block mr-2">
                                    <div className="form-group" style={{ 'width': '210px' }}>
                                        <select className="custom-select" name="state" id="state" onChange={(e) => { this.selectState(e) }}>
                                            <option value="">Select State</option>
                                            <option value={1}>Andaman and Nicobar Islands</option>
                                            <option value={2}>Andhra Pradesh</option>
                                            <option value={3}>Arunachal Pradesh</option>
                                            <option value={4}>Assam</option><option value={5}>Bihar</option><option value={6}>Chandigarh</option><option value={7}>Chhattisgarh</option><option value={8}>Dadra and Nagar Haveli</option><option value={37}>Daman and Diu</option><option value={9}>Delhi</option><option value={10}>Goa</option><option value={11}>Gujarat</option><option value={12}>Haryana</option><option value={13}>Himachal Pradesh</option><option value={14}>Jammu and Kashmir</option><option value={15}>Jharkhand</option><option value={16}>Karnataka</option><option value={17}>Kerala</option><option value={18}>Ladakh</option><option value={19}>Lakshadweep</option><option value={20}>Madhya Pradesh</option><option value={21}>Maharashtra</option><option value={22}>Manipur</option><option value={23}>Meghalaya</option><option value={24}>Mizoram</option><option value={25}>Nagaland</option><option value={26}>Odisha</option><option value={27}>Puducherry</option><option value={28}>Punjab</option><option value={29}>Rajasthan</option><option value={30}>Sikkim</option><option value={31}>Tamil Nadu</option><option value={32}>Telangana</option><option value={33}>Tripura</option><option value={34}>Uttar Pradesh</option><option value={35}>Uttarakhand</option><option value={36}>West Bengal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cm-district d-inline-block">
                                    <div className="form-group" style={{ 'width': '210px' }}>
                                        <select className="custom-select" name="district" id="district" onChange={(e) => { this.districtSelected(e) }}>
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

                        <div className="row mb-4">
                            {/* Total Vaccination Doses */}
                            <div className={isExists(get_public_stats) && isExists(get_public_stats.topBlock.registration.total) ? 'col-6 col-sm-12 margin-b cardblockcls col-lg-4' : 'col-6 col-sm-12 margin-b cardblockcls col-lg-6'}>
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span className="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob">
                                            Total Vaccination Doses
                                        </p>
                                        <h3 className="accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.total : ''}</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted">Dose 1</small>
                                                <p className="d-block mb-0 font-weight-bold font-2">{isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.tot_dose_1 : ''}</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted">Dose 2</small>
                                                <p className="d-block mb-0 font-weight-bold font-2">{isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.tot_dose_2 : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Site Conducting Vaccination */}
                            <div className={isExists(get_public_stats) && isExists(get_public_stats.topBlock.registration.total) ? 'col-6 col-sm-12 margin-b cardblockcls col-lg-4' : 'col-6 col-sm-12 margin-b cardblockcls col-lg-6'}>
                                <div className="small-box bg-white cm-vaccinated-box">
                                    <div className="icon icon-bg-vaccine">
                                        <span className="icon-vaccine"></span>
                                    </div>
                                    <div className="inner innerbox">
                                        <p className="fontnormal titlemob">
                                            Site Conducting Vaccination
                                        </p>
                                        <h3 className="accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.sites.total : ''}</h3>
                                        <div className="row m-0 r-0 w-100">
                                            <div className="col pl-0">
                                                <small className="text-muted">Government</small>
                                                <p className="d-block mb-0 font-weight-bold font-2">{isExists(get_public_stats) ? get_public_stats.topBlock.sites.govt : ''}</p>
                                            </div>
                                            <div className="col pr-0">
                                                <small className="text-muted">Private</small>
                                                <p className="d-block mb-0 font-weight-bold font-2">{isExists(get_public_stats) ? get_public_stats.topBlock.sites.pvt : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Total Registration */}
                            {isExists(get_public_stats) && isExists(get_public_stats.topBlock.registration.total) ?
                                <div className="col-6 col-sm-12 margin-b cardblockcls col-lg-4">
                                    <div className="small-box bg-white cm-vaccinated-box">
                                        <div className="icon icon-bg-vaccine">
                                            <span className="icon-vaccine"></span>
                                        </div>
                                        <div className="inner innerbox">
                                            <p className="fontnormal titlemob">
                                                Total Registration
                                            </p>
                                            <h3 className="accessibility-plugin-ac">{isExists(get_public_stats) ? get_public_stats.topBlock.registration.total : ''}</h3>
                                            <div className="row m-0 r-0 w-100">
                                                <div className="col pl-0">
                                                    <small className="text-muted">Age 18-44</small>
                                                    <p className="d-block mb-0 font-weight-bold font-2">{isExists(get_public_stats) ? get_public_stats.topBlock.registration.cit_18_45 : ''}</p>
                                                </div>
                                                <div className="col pr-0">
                                                    <small className="text-muted">Age 45+</small>
                                                    <p className="d-block mb-0 font-weight-bold font-2">{isExists(get_public_stats) ? get_public_stats.topBlock.registration.cit_45_above : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ''}
                        </div>

                        {/* Vaccination Trends Card Start*/}
                        <VaccinationTrend get_stats={get_stats} get_public_stats={get_public_stats} />
                        {/* Vaccination Trends Card Ends*/}
                        {/* Vaccination Stats Start */}
                        <div className="row mb-4">
                            <div className="col-lg-3 connectedSortable">
                                <div className="card">
                                    <div className="card-header card-title">Vaccination - Category</div>
                                    <div className="card-body m-auto">
                                        <Doughnut
                                            width="250"
                                            height="175"
                                            data={vcaccination_category_gender}
                                            options={{
                                                responsive: false,
                                                maintainAspectRatio: false,
                                            }}
                                        />
                                        <div className="mb-3"></div>
                                        <Doughnut
                                            width="250"
                                            height="175"
                                            data={vcaccination_category_vaccine}
                                            options={{
                                                responsive: false,
                                                maintainAspectRatio: false,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 connectedSortable">

                                <div className="card">
                                    <div className="card-header">Vaccination by Age</div>
                                    <div className="card-body m-auto">
                                        <Pie
                                            width="375"
                                            height="375"
                                            data={vcaccinationbyage}
                                            options={{
                                                responsive: false,
                                                maintainAspectRatio: false,
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 connectedSortable">
                                <div className="card" style={{
                                    'minHeight': '100%',
                                    'height': '0',
                                    'overflowY': 'auto'
                                }}>
                                    <div className="card-header">
                                        Vaccination By State/UT
                                    </div>
                                    <div className="card-body">
                                        <div className="slim">
                                            <table className="table tblstates">
                                                <thead>
                                                    <th>State/UT</th>
                                                    <th>Today</th>
                                                    <th>Total</th>
                                                </thead>
                                                <tbody>
                                                    {this.renderStateData(vaccinationbystate)}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Vaccination Stats Ends  */}
                        {/* Aefi and rural and urban graph container start*/}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">AEFI Reported </div>
                                    <div className="card-body">
                                        <Line
                                            height={300}
                                            data={aefi_report}
                                            options={
                                                {
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    title: {
                                                        display: true,
                                                        text: 'Average Rainfall per month',
                                                        fontSize: 20
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: 'right'
                                                    }
                                                }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">Rural Vs Urban Trend </div>
                                    <div className="card-body">
                                        <Line
                                            height={300}
                                            data={rural_urban_report}
                                            options={
                                                {
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    title: {
                                                        display: true,
                                                        text: 'Average Rainfall per month',
                                                        fontSize: 20
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: 'right'
                                                    }
                                                }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Aefi and rural and urban graph container end*/}
                        {/* Vacinnation Coverage Graph Start*/}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">Vaccination Coverage</div>
                                    <div className="card-body">
                                        <Bar
                                            height={400}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: {
                                                    title: {
                                                        display: true,
                                                        text: "Chart.js Bar Chart"
                                                    }
                                                }
                                            }} data={vaccination_coverage} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Vacinnation Coverage Graph End*/}
                        {/* Registration Trends Card Start*/}
                        <RegistrationTrend get_stats={get_stats} get_public_stats={get_public_stats} />
                        {/* Registration Trends Card Ends*/}

                    </div>
                </div>
            </div >
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