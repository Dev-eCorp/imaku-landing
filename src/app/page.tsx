"use client";
import React, { useState } from "react";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import MailContext from "@/contexts/FormContext";
import Hero from "@/components/hero";

interface IUpdateMailData {
	name?: string;
	email?: string;
	message?: string;
}
export default function Home() {
	return (
		<main>
			<Header />
			<Content />
			<Testimonials />
			<Hero />
			<Footer />
		</main>
	);
}
