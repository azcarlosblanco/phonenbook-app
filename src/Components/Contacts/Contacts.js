/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import Loader from '../layout/Loader';
import { getContacts } from '../../actions/contactsActions';

// Destructuing contacts and loading from contactsState
function Contacts({ contactsState: { contacts, loading }, getContacts }) {
    useEffect(() => {
        getContacts();
    }, [getContacts]);

    if (loading || contacts === null) {
        return <Loader />;
    }
    
    return (
        <div className="container">
            <div className="row card-container">
                {!loading && contacts.length === 0 ? (
                    <p className="center"> There is nothing here right now</p>
                ) : (
                    contacts.map(contact => {
                        return (
                            <ContactItem key={contact.id} contact={contact} />
                        );
                    })
                )}
            </div>
        </div>
    );
}

Contacts.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    // eslint-disable-next-line react/forbid-prop-types
    contactsState: PropTypes.object.isRequired,
    getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    contactsState: state.contactsState
});

export default connect(
    mapStateToProps,
    { getContacts }
)(Contacts);
