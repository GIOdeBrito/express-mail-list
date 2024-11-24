
const MailListModel = require('../models/mail.list.model.cjs');

var listMail = [];

class MailController
{
	static register (req, res)
	{
		const mail = req.body.Mail;
	    const name = req.body.Name;

	    insertMailInList(name, mail);

	    res.redirect('/registered');
	}

	static remove (req, res)
	{
		const mail = req.body.Mail;

		removeMailFromList(mail);

		res.redirect('/list');
	}

	/**
	* Returns the email and name list.
	* @returns {Array<MailListModel>}
	*/
	static get MailList ()
	{
		return listMail ?? [];
	}
}

/**
* @param {string} name
* @param {string} mail
* @returns {void}
*/
function insertMailInList (name, mail)
{
	let model = new MailListModel(name, mail);

	listMail.push(model);
}

/**
* Removes a mail object from the list.
* @returns {void}
*/
function removeMailFromList (mail)
{
	listMail.findIndex(item => item.Mail === mail);


}

module.exports = MailController;
