import styled from "styled-components";
import { useRouter } from "next/router";
import { Pagination } from "@mui/material";

import RestaurantItem from "@/components/RestaurantItem";
import Detail from "@/components/Detail";
import { RowBox } from "@/styles/layout";
import { getRestaurants } from "@/api/restaurant";
import { Restaurant } from "@/types/restaurant";

export default function Home({ data }: { data: any }) {
	const {
		LOCALDATA_072404: { list_total_count, row },
	} = data;
	const router = useRouter();
	const page = router.query.offset
		? (Number(router.query.offset) - 1) / 10 + 1
		: 1;

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		router.push(`?offset=${(page - 1) * 10 + 1}`);
	};

	return (
		<PageWrapper>
			<PageTitle>서울 식당 둘러보기</PageTitle>
			<RowBox>
				<RestaurantList>
					{row.map((restaurant: Restaurant) => (
						<RestaurantItem restaurant={restaurant} key={restaurant.MGTNO} />
					))}
				</RestaurantList>
				<Detail />
			</RowBox>
			<StyledPagination
				count={Math.ceil(list_total_count / 10)}
				variant="outlined"
				color="primary"
				page={page}
				onChange={handlePageChange}
			/>
		</PageWrapper>
	);
}

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 70px 30px;
`;

const PageTitle = styled.h1``;

const RestaurantList = styled.ul`
	width: 50%;
	padding: 0 40px;
	margin: 2rem 0;
	border-right: 1px solid gray;
`;

const StyledPagination = styled(Pagination)`
	margin-top: 2rem;
`;

export async function getServerSideProps(context: any) {
	const { offset } = context.query;
	const data = await getRestaurants(offset);
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data },
	};
}
