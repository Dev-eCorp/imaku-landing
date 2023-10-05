import React, { ReactNode } from "react";
import {
	Container,
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Button,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

const Logo = () => (
	<IconButton
		edge="start"
		color="inherit"
		aria-label="logo"
		sx={{ mr: 2, padding: 0 }}
	>
		<SvgIcon
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			sx={{
				width: 40,
				height: 40,
				bgcolor: "indigo.500",
				borderRadius: "50%",
				p: 1,
			}}
		>
			<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
		</SvgIcon>
		<Typography variant="h6" component="div" sx={{ ml: 1, fontSize: "1.5rem" }}>
			Landing
		</Typography>
	</IconButton>
);

interface NavItemProps {
	children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => (
	<Button
		color="inherit"
		sx={{
			mr: 2,
			textTransform: "none",
			fontSize: "1rem",
			fontWeight: "normal",
		}}
	>
		{children}
	</Button>
);

const Header = () => {
	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{ backgroundColor: "transparent" }}
		>
			<Container>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Logo />
					<div>
						<NavItem>First Link</NavItem>
						<NavItem>Second Link</NavItem>
						<NavItem>Third Link</NavItem>
						<NavItem>Fourth Link</NavItem>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
