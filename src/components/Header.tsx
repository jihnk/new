import styled from "styled-components";
import Link from "next/link";
import Location from "../asset/location.svg";

function Header() {
	return (
		<HeaderWrapper>
			<HeaderContents>
				<Logo>
					SE
					<Location width={"2rem"} height={"2rem"} fill={"#6554a2"} />
					ULITE
				</Logo>
				<Nav>
					<NavList>
						<NavItem>
							<NavLink href="/">HOME</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/info">INFO</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/plan">PLAN</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/log">LOG</NavLink>
						</NavItem>
					</NavList>
				</Nav>
			</HeaderContents>
		</HeaderWrapper>
	);
}

export default Header;

const HeaderWrapper = styled.header`
	position: fixed;
	display: flex;
	top: 0px;
	width: 100%;
	height: 70px;
	background-color: #d0eeec;
	z-index: 2;
`;

const HeaderContents = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 20px;
`;

const Logo = styled.div`
	font-size: 2.5rem;
	font-weight: 800;
	color: #6554a2;
`;

const Nav = styled.nav`
	display: flex;
`;

const NavList = styled.ul`
	display: flex;
	gap: 1rem;
	list-style: none;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
	font-size: 1.5rem;
	font-weight: 600;
	color: #261d4a;
`;
