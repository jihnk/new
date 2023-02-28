import { useSetRecoilState } from "recoil";
import { detailState } from "recoil/atom";
import styled from "styled-components";

import { Restaurant } from "@/types/restaurant";

interface RestaurantItemProp {
	restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProp) => {
	const {
		BPLCNM: name,
		RDNWHLADDR: newAddress,
		SITEWHLADDR: oldAddress,
	} = restaurant;

	const setDetail = useSetRecoilState(detailState);

	const onClick = () => {
		setDetail({ ...restaurant });
	};

	return (
		<RestaurantItemWrapper onClick={onClick}>
			<RestaurantName>{name}</RestaurantName>
			<RestaurantAddress>
				{newAddress ? newAddress : oldAddress}
			</RestaurantAddress>
		</RestaurantItemWrapper>
	);
};

export default RestaurantItem;

const RestaurantItemWrapper = styled.li`
	list-style: none;
	border-bottom: 0.5px solid #655d64;
	padding: 0 0.5rem;
`;

const RestaurantName = styled.h3`
	margin: 10px 0;
	padding: 0;
`;

const RestaurantAddress = styled.p`
	margin: 10px 0;
`;
