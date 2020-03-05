/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';

function ViewContactModal({ current }) {
    const modalStyle = {
        width: '70%',
        height: '70%'
    };
debugger
    if (!current) {
        return (
            <div id="view-contact-modal" className="modal" style={modalStyle}>
                <div className="modal-content">
                    <Loader />
                </div>
            </div>
        );
    }
    return (
        <div id="view-contact-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">face</i>
                        <input
                            disabled
                            type="text"
                            name="firstName"
                            value={current.firstName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">
                            people
                        </i>
                        <input
                            disabled
                            type="text"
                            name="lastName"
                            value={current.lastName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">location_on</i>
                        <input
                            disabled
                            type="text"
                            name="countryCode"
                            value={current.countryCode}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">phone</i>
                        <input
                            disabled
                            type="text"
                            name="phoneNumber"
                            value={current.phoneNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    current: state.contactsState.current
});

export default connect(
    mapStateToProps,
    null
)(ViewContactModal);
