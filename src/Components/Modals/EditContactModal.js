/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateContact } from '../../actions/contactsActions';

function EditContactModal({ current, updateContact }) {
    const modalStyle = {
        width: '75%',
        height: '75%'
    };

    const contactTemplate = {
        firstName: '',
        lastname: '',
        countryCode: '',
        phoneNumber: '',
    };

    const [contact, setContact] = useState(contactTemplate);

    useEffect(() => {
        if (current) {
            setContact(current);
        }
    }, [current]);

    const handleChange = event => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = () => {
        if (
            contact.firstName === '' ||
            contact.lastName === '' ||
            contact.countryCode === '' ||
            contact.phoneNumber === ''
        ) {
            Materialize.toast({ html: 'Please fill all the fields' });
            return;
        }

        const updatedContact = {
            id: current.id,
            ...contact
        };

        updateContact(updatedContact);
        Materialize.toast({ html: 'Contact Updated' });
    };

    return (
        <div id="edit-contact-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Contact Details</h4>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">face</i>
                        <input
                            type="text"
                            name="firstName"
                            value={contact.firstName}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">
                            people
                        </i>
                        <input
                            type="text"
                            name="lastName"
                            value={contact.lastName}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">location_on</i>
                        <input
                            type="text"
                            name="countryCode"
                            value={contact.countryCode}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">phone</i>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={contact.phoneNumber}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div
                    onClick={onSubmit}
                    className="modal-close waves-effect blue btn"
                >
                    Enter
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    current: state.contactsState.current
});

EditContactModal.propTypes = {
    updateContact: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { updateContact }
)(EditContactModal);
