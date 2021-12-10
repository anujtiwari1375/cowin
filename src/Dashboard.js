import React from "react";
import { connect } from 'react-redux';
import VaccinationTrend from './Graphs/VaccinationTrend';
import VaccinationData from './Graphs/VaccinationData';
import VaccinationStats from './Graphs/VaccinationStats';
import Aefi from './Graphs/Aefi';
import RuralUrbanTrend from './Graphs/RuralUrbanTrend';
import VaccinationCoverage from './Graphs/VaccinationCoverage';
import RegistrationTrend from './Graphs/RegistrationTrend';

import { getPublicStats, getStats, getDistrict } from './actions/DashboardAction';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, registerables } from 'chart.js';




ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, ...registerables);


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_state: '',
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
        this.setState({
            selected_state: state_code
        });
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
        var state_code = this.state.selected_state;        
        this.props.getPublicStats(state_code, district_code);
        this.props.getStats(state_code, district_code);

    }

    render() {
        const { get_public_stats, get_stats } = this.props;
        var districtArray = this.state.districtArray;
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
                        <VaccinationData get_public_stats={get_public_stats} />
                        {/* Vaccination Trends Card Start*/}
                        <VaccinationTrend get_stats={get_stats} get_public_stats={get_public_stats} />
                        {/* Vaccination Trends Card Ends*/}
                        {/* Vaccination Stats Start */}
                        <VaccinationStats get_public_stats={get_public_stats} />
                        {/* Vaccination Stats Ends  */}
                        {/* Aefi and rural and urban graph container start*/}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <Aefi get_public_stats={get_public_stats} />
                            </div>
                            <div className="col-md-6">
                                <RuralUrbanTrend get_stats={get_stats} />
                            </div>
                        </div>
                        {/* Aefi and rural and urban graph container end*/}
                        {/* Vacinnation Coverage Graph Start*/}
                        <VaccinationCoverage get_public_stats={get_public_stats} />
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