import Link from "next/link";
import styled from "styled-components";

import Location from "../asset/location.svg";

function Header() {
	return (
		<HeaderContainer>
			<Logo>
				SE
				<Location width={"2rem"} height={"2rem"} fill={"rgb(92, 73, 142)"} />
				ULITE
			</Logo>
			<nav>
				<NavList>
					<li>
						<StyledLink href="/">HOME</StyledLink>
					</li>
					<li>
						<StyledLink href="/info">INFO</StyledLink>
					</li>
					<li>
						<StyledLink href="/plan">PLAN</StyledLink>
					</li>
					<li>
						<StyledLink href="/log">LOG</StyledLink>
					</li>
				</NavList>
			</nav>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	border-bottom: 1px solid #a3b3b3;
	background-color: #d0eeec;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	font-size: 2.5rem;
	font-weight: 800;
	color: #6554a2;
`;

const NavList = styled.ul`
	display: flex;
	gap: 1rem;
	list-style: none;
	padding-left: 0px;
`;

const StyledLink = styled(Link)`
	font-size: 1.5rem;
	font-weight: 600;
	text-decoration: none;
	color: #491e49;
`;
