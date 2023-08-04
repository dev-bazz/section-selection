import { Background, Button } from "../../components";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-sector.png";
import {
	useAppContext,
	useCreateSessionAndUpdateData,
	useFirebase,
} from "../../config";
import { useEffect } from "react";
export function Sector() {
	const { fetchData } = useFirebase();
	const { setData, appSector, setSessionData, setAppSector, sessionData } =
		useAppContext();
	const navigate = useNavigate();

	const { register, control, formState, reset, handleSubmit } = useForm({
			defaultValues: {
				name: sessionData ? sessionData.name : "",
				sectors: sessionData ? sessionData.sectors : "",
				checkbox: false,
			},
		}),
		{ errors } = formState;

	const { createSession, updateSession } = useCreateSessionAndUpdateData();

	useEffect(() => {
		fetchData().then((res) => {
			setAppSector(res);
		});
	}, []);

	// Effects

	const onSubmit = (data) => {
		setData(false);

		reset();

		createSession().then(() => {
			updateSession(data);
			setSessionData(data);
		});

		navigate({ pathname: "/" }, { replace: true, state: data });
	};

	return (
		<>
			<Background>
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}>
					<div
						style={{
							position: "absolute",

							top: "-44px",
						}}>
						<img src={logo} />
					</div>
					<h1 className={styles.form_title}>Add Data</h1>
					<p className={styles.form_description}>
						Please enter your name and pick the Sectors you are currently
						involved in.
					</p>

					<div style={{ maxWidth: "402px", width: "100%" }}>
						<div
							style={{
								marginTop: "16px",
							}}
							className={
								errors.name ? styles.form_input_error : styles.form_input
							}>
							<label htmlFor="name">Name</label>

							<input
								{...register("name", {
									required: {
										message: "Your Full Name is Required",
										value: true,
									},
								})}
								type="text"
								id="name"
								placeholder="First & Last Name"
							/>
							{errors.name && (
								<p className={errors.name ? styles.error_message : ""}>
									{errors.name.message}
								</p>
							)}
						</div>

						<div
							style={{
								marginTop: "24px",
							}}
							className={
								errors.sectors ? styles.form_input_error : styles.form_input
							}>
							<label htmlFor="sectors">Sectors</label>

							<select
								placeholder="Select Sector"
								id="sector"
								{...register("sectors", {
									required: {
										value: true,
									},
								})}>
								<option
									disabled
									value={""}>
									Select Sector
								</option>
								{appSector?.map((sector, key) => (
									<optgroup
										key={key}
										label={sector.label}>
										{sector.options.map((option, key) => (
											<option
												key={key}
												value={option.value}>
												{option.label}
											</option>
										))}
									</optgroup>
								))}
							</select>
							{errors.sectors && (
								<p className={errors.sectors ? styles.error_message : ""}>
									{errors.sectors.message}
								</p>
							)}
						</div>
						<div className={styles.terms}>
							<input
								type="checkbox"
								id="checkbox"
								{...register("checkbox", {
									required: {
										message: "You must agree to terms",
										value: true,
									},
								})}
							/>
							<label htmlFor="checkbox">Agree to terms</label>
							{errors.checkbox && (
								<p className={errors.checkbox ? styles.error_message : ""}>
									{errors.checkbox.message}
								</p>
							)}
						</div>
					</div>
					<Button text="Save" />
				</form>
			</Background>
		</>
	);
}
