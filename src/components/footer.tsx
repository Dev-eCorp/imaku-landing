import React, { FC } from "react";
import {
	Container,
	Typography,
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
	SvgIcon,
	Divider,
} from "@mui/material";

type CategoryProps = {
	title: string;
	links: string[];
	className?: string;
};

const Category: FC<CategoryProps> = ({ title, links, className = "" }) => (
	<Box sx={{ width: "100%", px: 4, className }}>
		<Typography variant="h6" color="textPrimary" gutterBottom>
			{title}
		</Typography>
		<List dense>
			{links.map((link, index) => (
				<ListItem key={index} disableGutters>
					<ListItemText
						primary={
							<Typography variant="body2" color="textSecondary">
								{link}
							</Typography>
						}
					/>
				</ListItem>
			))}
		</List>
	</Box>
);

const Footer: FC = () => {
	return (
		<Box component="footer" color="text.secondary">
			<Container sx={{ py: 6 }}>
				<Box
					display="flex"
					flexDirection={{ xs: "column", md: "row" }}
					alignItems="center"
				>
					<Box
						display="flex"
						alignItems="center"
						mb={{ xs: 2, md: 0 }}
						flexGrow={1}
					>
						<SvgIcon
							color="primary"
							sx={{ mr: 1, bgcolor: "indigo.500", borderRadius: "50%", p: 1 }}
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</SvgIcon>
						<Typography variant="h5">Landing</Typography>
					</Box>
					<Box
						display="flex"
						flexDirection={{ xs: "column", md: "row" }}
						flexGrow={2}
					>
						<Category
							title="CATEGORIES"
							links={["First Link", "Second Link", "Third Link", "Fourth Link"]}
						/>
						<Category
							title="CATEGORIES"
							links={["First Link", "Second Link", "Third Link", "Fourth Link"]}
						/>
						<Category
							title="CATEGORIES"
							links={["First Link", "Second Link", "Third Link", "Fourth Link"]}
						/>
						<Category
							title="CATEGORIES"
							links={["First Link", "Second Link", "Third Link", "Fourth Link"]}
						/>
					</Box>
				</Box>
			</Container>
			<Divider />
			<Container sx={{ py: 2 }}>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="body2">© 2023 Landing</Typography>
					<Box>
						<IconButton color="inherit">
							<SvgIcon>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</SvgIcon>
						</IconButton>
						<IconButton color="inherit">
							<SvgIcon>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</SvgIcon>
						</IconButton>
						<IconButton color="inherit">
							<SvgIcon>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
								<path d="M17.5 6.5h.01"></path>
							</SvgIcon>
						</IconButton>
						<IconButton color="inherit">
							<SvgIcon>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<rect x="4" y="4" width="16" height="16" rx="2"></rect>
								<line x1="8" y1="11" x2="8" y2="16"></line>
								<line x1="8" y1="8" x2="8" y2="8.01"></line>
								<line x1="12" y1="16" x2="12" y2="11"></line>
								<path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
							</SvgIcon>
						</IconButton>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
