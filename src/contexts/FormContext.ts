import React from "react";

interface IMailContext {
	mailData: {
		name: string;
		email: string;
		message: string;
	};
	updateMailData: (value: IUpdateMailData) => void;
}

interface IUpdateMailData {
	name?: string;
	email?: string;
	message?: string;
}

const MailContext = React.createContext<IMailContext | null>(null);

export default MailContext;
