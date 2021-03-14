const filterer = (data, key, value) => {
	data.filter(garden => {
		return garden.key == value;
	})
}

filterer()

module.exports = {
	filterer,
}