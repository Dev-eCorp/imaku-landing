"use client";
import React, { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function ContactPage() {
	return (
		<main>
			<Header />
			<Contact />
			<Testimonials />
			<Footer />
		</main>
	);
}
