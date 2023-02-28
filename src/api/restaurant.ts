import axios from "axios";
import { NEXT_PUBLIC_SEOUL_KEY } from "const";

export const getRestaurants = async (offset: number = 1) => {
	try {
		const res = await axios.get(
			`http://openapi.seoul.go.kr:8088/${NEXT_PUBLIC_SEOUL_KEY}/json/LOCALDATA_072404/${offset}/${
				Number(offset) + 9
			}/
`
		);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
