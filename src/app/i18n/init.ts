import i18n from 'i18n';

const initialization = (req, res, next) => {
	i18n.setLocale(req.header('accept-language'))
	next()
}

export default initialization