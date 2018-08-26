import fs from 'fs';
import path from 'path';

const states = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../seed.json'))
);

const toOneDecimal = num => {
	return Number(
		num
			.toFixed(2)
			.toString()
			.match(/[0-9]+\.[0-9]/)[0]
	);
};

export const getStatesByCode = code => states.filter(v => v.CODE === code);

export const getLGAByState = state => states.filter(v => v.STATE === state);

export const getStateByCoord = ({ lat, lon, strict = true }) => {
	if (strict) {
		return states.filter(
			({ LAT, LON }) =>
				toOneDecimal(LAT) === toOneDecimal(lat) &&
				toOneDecimal(LON) === toOneDecimal(lon)
		);
	}

	return states.filter(
		({ LAT, LON }) =>
			LAT.toFixed(0) === lat.toFixed(0) && LON.toFixed(0) === lon.toFixed(0)
	);
};

export default states;
