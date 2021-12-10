import React from "react";
import ASSETS_URL from '../functions/assetsUrl';
import isExists from '../functions/isExists';

class VaccinationData extends React.Component {
    render() {
        var get_public_stats = this.props.get_public_stats;
        return (
            <div className="row mb-4">
                {/* Total Vaccination Doses */}
                <div className={isExists(get_public_stats) && isExists(get_public_stats.topBlock.registration.total) ? 'col-6 col-sm-12 margin-b cardblockcls col-lg-4' : 'col-6 col-sm-12 margin-b cardblockcls col-lg-6'}>

                    <div className="small-box bg-white cm-vaccinated-box">
                        <div className="float-left">
                            <img src={ASSETS_URL + "vaccine.png"} height={45} className="rounded-circle border-0 m-w-45 w-100 m-h-45" />
                        </div>
                        <div className="inner innerbox ml-2" style={{
                            paddingLeft: '55px'
                        }}>
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
                        <div className="float-left" style={{
                            'borderRadius': '30px',
                            'padding': '5px',
                            'background': '#E8F1F9'
                        }}>
                            <img src={ASSETS_URL + "building.png"} width={40} style={{ 'height': 'auto' }} className="rounded-circle border-0 m-w-45 m-h-45" />
                        </div>
                        <div className="inner innerbox ml-2" style={{
                            paddingLeft: '55px'
                        }}>
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
                            <div className="float-left" style={{
                                'borderRadius': '30px',
                                'padding': '5px',
                                'background': '#E8F1F9'
                            }}>
                                <img src={ASSETS_URL + "group.png"} width={40} style={{ 'height': 'auto' }} className="rounded-circle border-0 m-w-45 m-h-45" />
                            </div>
                            <div className="inner innerbox ml-2" style={{
                                paddingLeft: '55px'
                            }}>
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
        );
    }
}

export default VaccinationData;