import React, { useState } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { addContacts } from '../../actions/contactsActions';

function AddContactModal({ addContacts }) {
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
        const newContact = { id: uuidv4(), ...contact, selected: false };
        addContacts(newContact);
        setContact(contactTemplate);
    };

    return (
        <div id="add-contact-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Contact Details</h4>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">face</i>
                        <input
                            type="text"
                            name="firstName"
                            value={contact.firstName}
                            onChange={e => handleChange(e)}
                            placeholder="First Name"
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
                            placeholder="Last Name"
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
                            placeholder="Country Code"
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
                            placeholder="Phone Number"
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

AddContactModal.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    // eslint-disable-next-line react/forbid-prop-types
    addContacts: PropTypes.func.isRequired
};

export default connect(
    null,
    { addContacts }
)(AddContactModal);
