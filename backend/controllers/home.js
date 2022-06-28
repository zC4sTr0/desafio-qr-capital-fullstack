const path = require('path');


exports.getHomePage = (req, res, next) => {
    const all_contacts = Contato.getContacts();
    all_contacts.then(([rows, fieldData]) => {
        res.render('home', {
            contact_list: rows,
            pageTitle: 'Home',
            path: '/',
        });
    }).catch((err) => console.log(err));

};