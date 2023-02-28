import { useRecoilValue } from "recoil";
import { detailState } from "recoil/atom";
import styled from "styled-components";
import Kakaomap from "./Kakaomap";

declare global {
	interface Window {
		kakao: any;
	}
}

const Detail = () => {
	const detail = useRecoilValue(detailState);
	if (!detail) return <></>;
	const {
		BPLCNM: name,
		SITETEL: tel,
		RDNWHLADDR: newAddress,
		SITEWHLADDR: oldAddress,
		UPTAENM: category,
	} = detail;

	return (
		<DetailWrapper>
			<RestaurantName>{name}</RestaurantName>
			<RestaurantDescription>
				<DetailTitle>카테고리</DetailTitle>
				<DetailContent>{category}</DetailContent>
			</RestaurantDescription>
			<RestaurantDescription>
				<DetailTitle>전화번호</DetailTitle>
				<DetailContent>{tel ? tel : "-"}</DetailContent>
			</RestaurantDescription>
			<RestaurantDescription>
				<DetailTitle>상세 위치</DetailTitle>
				<DetailContent>{newAddress ? newAddress : oldAddress}</DetailContent>
			</RestaurantDescription>
			<Kakaomap detail={detail} />
		</DetailWrapper>
	);
};

export default Detail;

const DetailWrapper = styled.div`
	width: 50%;
	padding: 0 40px;
	margin: 2rem 0;
`;

const RestaurantName = styled.h1``;

const RestaurantDescription = styled.div`
	display: flex;
	gap: 1rem;
`;

const DetailTitle = styled.h3`
	font-size: 1rem;
`;

const DetailContent = styled.p`
	font-size: 1rem;
	font-weight: 500;
`;
