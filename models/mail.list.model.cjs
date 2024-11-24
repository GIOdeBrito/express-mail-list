
class MailListModel
{
	#name = String();
	#mail = String();

	constructor (name, mail)
	{
		this.#name = name;
		this.#mail = mail;
	}

	get Name ()
	{
		return this.#name;
	}

	get Mail ()
	{
		return this.#mail;
	}
}

module.exports = MailListModel;
