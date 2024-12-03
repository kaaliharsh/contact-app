<<<<<<< HEAD
import React  from "react";
import ContactCard from "./ContactCard";
=======
import def from "ajv/dist/vocabularies/discriminator";
import React  from "react";
>>>>>>> 2d1d019ea65408ff32a95ee3f11c81ff3a2b216b


const ContactList=(props)=>{
    console.log(props);

    const renderContactList=props.contacts.map((contact)=>{
<<<<<<< HEAD
        return<ContactCard contact={contact}/>;
        
    });
    return<div className="ui celled list">{renderContactList}</div>;

};
=======
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="header">{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    })
    return(
        <div className="ui celled list">
           {renderContactList}
        </div>
    );
}
>>>>>>> 2d1d019ea65408ff32a95ee3f11c81ff3a2b216b

export default ContactList;