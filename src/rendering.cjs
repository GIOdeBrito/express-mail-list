
const fs = require('node:fs');

/**
* Renders the requested page using a base set layout.
* @param {string} title - The page title.
* @param {string} renderbody - The page body.
* @param {Response} response - The user response interface.
* @param {object?} options - Extra options to be used in the page's renderbody.
* @returns {void}
*/
function renderPage (title, renderbody, response, options = {})
{
	response.render('_layout', { title: title, renderbody: renderbody, options: options });
}

module.exports = renderPage;
