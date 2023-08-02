import { Background, Button, Loader } from "../../components";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { useAppContext, useFirebase } from "../../config";
import { useEffect, useCallback, useRef } from "react";

export function Sector() {
	const { setData, data, appSector } = useAppContext();
	const sectors = useRef([]);
	const navigate = useNavigate();

	const { register, control, formState, reset, handleSubmit } = useForm({
			defaultValues: {
				name: "",
				sectors: "",
			},
		}),
		{ errors } = formState;

	const { fetchData } = useFirebase();

	const fetchDataCallBack = useCallback(() => {
		Promise.all([fetchData("account"), fetchData()])
			.then(([res1, res2]) => {
				console.log(res1);
				console.log(res2);
				appSector.current = res2;
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setData(true);
			});
	}, [fetchData, setData]);

	useEffect(() => {
		fetchDataCallBack();
	}, [fetchDataCallBack]);

	// Effects

	const onSubmit = (data) => {
		console.log(data);

		reset();
		setData(true);
		navigate({ pathname: "/" }, { replace: true, state: data });
	};

	return (
		<>
			<Background>
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}>
					<h1 className={styles.form_title}>Add Data</h1>
					<p className={styles.form_description}>
						Please enter your name and pick the Sectors you are currently
						involved in.
					</p>
					{data ? <p>Data Loaded</p> : <p>Loading</p>}
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
										message: "Please Select a Sector",
										value: true,
									},
								})}>
								<option
									disabled
									value={""}>
									Select Sector
								</option>
								{appSector.current.map((sector, key) => (
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
					</div>
					<Button text="Save" />
				</form>
			</Background>
			<DevTool control={control} />
			{data || <Loader />}
		</>
	);
}
