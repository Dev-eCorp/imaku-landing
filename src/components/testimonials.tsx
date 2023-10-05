import Image from "next/image";
import React from "react";
import { Container, Grid, Typography, Divider, Avatar } from "@mui/material";

const Testimonials = () => {
	const testimonials = [
		{
			imageSrc: "https://dummyimage.com/302x302",
			testimonial:
				"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
			name: "HOLDEN CAULFIELD",
			position: "Senior Product Designer",
		},
		{
			imageSrc: "https://dummyimage.com/302x302",
			testimonial:
				"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
			name: "ALPER KAMU",
			position: "UI Developer",
		},
		{
			imageSrc: "https://dummyimage.com/302x302",
			testimonial:
				"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
			name: "HENRY LETHAM",
			position: "CTO",
		},
	];

	return (
		<section className="text-gray-600 body-font">
			<Container maxWidth="lg" style={{ padding: "3rem 1rem" }}>
				<Grid container spacing={4}>
					{testimonials.map((testimonial, index) => (
						<Grid key={index} item xs={12} sm={4}>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Avatar
									alt="testimonial"
									src={testimonial.imageSrc}
									style={{
										width: 80,
										height: 80,
										marginBottom: "1rem",
										border: "2px solid #e2e8f0",
									}}
								/>
								<Typography
									variant="body1"
									align="center"
									style={{ marginBottom: "1rem" }}
								>
									{testimonial.testimonial}
								</Typography>
								<Divider
									style={{
										width: "2.5rem",
										height: "2px",
										backgroundColor: "#667eea",
										margin: "0.5rem 0",
									}}
								/>
								<Typography
									variant="h6"
									color="textPrimary"
									style={{ marginBottom: "0.25rem" }}
								>
									{testimonial.name}
								</Typography>
								<Typography variant="subtitle2" color="textSecondary">
									{testimonial.position}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</Container>
		</section>
	);
};

export default Testimonials;
