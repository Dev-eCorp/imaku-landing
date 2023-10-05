import React from "react";
import Card from "./card";
import { Container, Typography, Box, Grid, Divider } from "@mui/material";

const Content = () => {
	const cards = [
		{
			imageSrc: "https://dummyimage.com/720x400",
			subtitle: "SUBTITLE",
			title: "Chichen Itza",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
		{
			imageSrc: "https://dummyimage.com/720x400",
			subtitle: "SUBTITLE",
			title: "Colosseum Roma",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
		{
			imageSrc: "https://dummyimage.com/720x400",
			subtitle: "SUBTITLE",
			title: "Great Pyramid of Giza",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
		{
			imageSrc: "https://dummyimage.com/720x400",
			subtitle: "SUBTITLE",
			title: "San Francisco",
			description:
				"Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
		},
	];

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20">
					<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
							Pitchfork Kickstarter Taxidermy
						</h1>
						<div className="h-1 w-20 bg-indigo-500 rounded"></div>
					</div>
					<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify, subway tile poke farm-to-table. Franzen you probably
						havent heard of them man bun deep jianbing selfies heirloom prism
						food truck ugh squid celiac humblebrag.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{cards.map((card, index) => (
						<Card key={index} {...card} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Content;
