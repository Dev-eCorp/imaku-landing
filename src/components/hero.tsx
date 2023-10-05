import Image from "next/image";
import React, { useContext } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import MailContext from "@/contexts/FormContext";
import { useRouter } from "next/navigation";
import { useForm, FieldValues } from "react-hook-form";

interface FormData extends FieldValues {
	name: string;
	email: string;
}

const Hero = () => {
	const router = useRouter();
	const context = useContext(MailContext);

	if (!context) {
		throw new Error("Contact must be used within a MailContext Provider");
	}

	const { mailData, updateMailData } = context;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		updateMailData(data);
		router.push("/contact");
	};

	return (
		<Container component="section" sx={{ py: 6 }}>
			<Grid container spacing={5} alignItems="center">
				<Grid item md={6} xs={12}>
					<Image
						alt="hero"
						src="https://dummyimage.com/720x600"
						width={720}
						height={600}
						layout="responsive"
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<Typography variant="h3" component="h1" gutterBottom>
						Knausgaard typewriter readymade marfa
					</Typography>
					<Typography variant="body1" paragraph>
						Ingresa tu correo electronico para enviarnos un mensaje
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2} alignItems="center">
							<Grid item xs={12} md={8}>
								<TextField
									fullWidth
									label="Nombre"
									variant="outlined"
									name="name"
									id="hero-name-field"
									inputProps={{
										...register("name", { required: "El nombre es requerido" }),
									}}
									error={Boolean(errors.name)}
									helperText={
										errors.name && typeof errors.name.message === "string"
											? errors.name.message
											: ""
									}
								/>
							</Grid>
							<Grid item xs={12} md={8}>
								<TextField
									fullWidth
									label="Email"
									variant="outlined"
									name="email"
									id="hero-email-field"
									inputProps={{
										...register("email", {
											required: "El correo electrónico es requerido",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: "Correo electrónico inválido",
											},
										}),
									}}
									error={Boolean(errors.email)}
									helperText={
										errors.email && typeof errors.email.message === "string"
											? errors.email.message
											: ""
									}
								/>
							</Grid>

							<Grid item xs={12} md={4} justifyContent={"center"}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
									className="text-white bg-indigo-500 hover:bg-indigo-600 rounded"
								>
									Enviar correo
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
