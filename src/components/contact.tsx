"use client";
import React, { FC, useContext, useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Container, Grid } from "@mui/material";
import MailContext from "@/contexts/FormContext";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface InputProps {
	label: string;
	id: string;
	type: "text" | "email" | "textarea";
	name: string;
	value?: string;
	register: any;
	errors: any;
}

const InputField: FC<InputProps> = ({
	label,
	id,
	type,
	name,
	register,
	errors,
	value,
}) => {
	return (
		<TextField
			fullWidth
			id={id}
			label={label}
			type={type === "textarea" ? "text" : type}
			name={name}
			variant="outlined"
			multiline={type === "textarea"}
			rows={type === "textarea" ? 4 : 1}
			margin="normal"
			defaultValue={value}
			inputProps={{
				...register(name, {
					required: "Este campo es requerido",
					pattern: {
						value:
							type === "email"
								? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
								: undefined,
						message:
							type === "email" ? "Correo electrónico inválido" : undefined,
					},
				}),
			}}
			error={Boolean(errors[name])}
			helperText={errors[name]?.message}
			className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
		/>
	);
};

const Contact: FC = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setValue("name", "");
		setValue("email", "");
		setValue("message", "");
	};
	const context = useContext(MailContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	if (!context) {
		throw new Error("Contact must be used within a MailContext Provider");
	}

	const { mailData, updateMailData } = context;

	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setNombre(mailData.name);
		setEmail(mailData.email);

		setValue("name", mailData.name);
		setValue("email", mailData.email);
	}, [mailData.email, mailData.name, setValue]);

	const form = useRef<HTMLFormElement>(null);

	const onValid = () => {
		if (form.current) {
			emailjs
				.sendForm(
					"service_8vrqafj",
					"template_66wytxq",
					form.current,
					"5MG36EtTVcrXMMZiO"
				)
				.then(
					() => {
						handleOpen();
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	const sendEmail = handleSubmit(onValid);

	return (
		<section className="text-gray-600 body-font relative">
			<Container maxWidth="md">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						Contact Us
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify.
					</p>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<InputField
								label="Name"
								id="name"
								name="name"
								type="text"
								value={nombre}
								register={register}
								errors={errors}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputField
								label="Email"
								id="email"
								name="email"
								type="email"
								value={email}
								register={register}
								errors={errors}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputField
								label="Message"
								id="message"
								name="message"
								type="textarea"
								register={register}
								errors={errors}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								type="submit"
								className="text-white bg-indigo-500 hover:bg-indigo-600 rounded"
							>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Mensaje Enviado"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Tu correo ha sido enviado correctamente.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
		</section>
	);
};

export default Contact;
