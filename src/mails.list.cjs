
const listMail = [];

/**
* @param {object} obj
* @returns {void}
*/
function insertMailInList (obj)
{
	listMail.push(obj);
}

/**
* Returns the email and name list.
* @returns {Array<object>}
*/
function getMailList ()
{
    return listMail;
}

module.exports = { insertMailInList, getMailList };
