"use client";

import React, { useState } from "react";
import MailContext from "@/contexts/FormContext";

interface AppWrapperProps {
	children: React.ReactNode;
}
export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
	interface IUpdateMailData {
		name?: string;
		email?: string;
		message?: string;
	}
	const [mailData, setMailData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const updateMailData = (value: IUpdateMailData) => {
		setMailData((prevMailData) => ({ ...prevMailData, ...value }));
	};

	return (
		<MailContext.Provider value={{ mailData, updateMailData }}>
			{children}
		</MailContext.Provider>
	);
};
