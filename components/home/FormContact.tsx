import {
    Typography,
    Grid,
    TextField,
    Button,
    Box,
    TextareaAutosize,
    Snackbar,
    Alert,
    AlertColor,
    Backdrop,
    CircularProgress,
    Autocomplete,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { SendRounded } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { countries } from "../../config";
import styles from "../../styles/Index.module.css";

export const FormContact = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        defaultValues: {},
    });

    const [open, setOpen] = useState(false);
    const [openD, setOpenD] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState<AlertColor>("success");
    const [dob, setDob] = useState<Date | null>(new Date());
    const [category, setCategory] = useState("");

    const { t } = useTranslation();

    const onSubmit = (data: any) => {
        console.log(data);
         setOpenD(true);

        emailjs.send("service_3lp2ayt", "template_jec1b4o", data, "FDUZ9tJ2LqrLT120R").then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setType("success");
                setMessage(t("Contact details have been sent successfully."));
                reset();
                setOpen(true);
                setOpenD(false);
            },
            (err) => {
                console.log("FAILED...", err);
                setType("error");
                setMessage(t("Error sending contact information."));
                setOpen(true);
                setOpenD(false);
            }
        );
    };

    const options = [
        { label: t("Viaje Solo"), id: 1 },
        { label: t("Viaje en Pareja"), id: 2 },
        { label: t("Viaje en Familia"), id: 3 },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={0} display="flex" justifyContent={"center"}>
                <Grid item xs={12} md={10} lg={10}>
                    <Typography
                        variant="h5"
                        component={"h5"}
                        color="primary"
                        sx={{ fontWeight: "900" }}>
                        {t("Formulario de Contacto")}
                    </Typography>
                    <Grid container spacing={2} sx={{ pt: 4 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={t("First name")}
                                variant="outlined"
                                fullWidth
                                size="small"
                                {...register("firstname", {
                                    required: true,
                                })}
                                error={!!errors.firstname}
                                helperText={errors.firstname ? t("First name is required") : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={t("Last name")}
                                variant="outlined"
                                fullWidth
                                size="small"
                                {...register("lastname", {
                                    required: true,
                                })}
                                error={!!errors.lastname}
                                helperText={errors.lastname ? t("Last name is required") : ""}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <MobileDatePicker
                                label={t("Date of Birth")}
                                inputFormat="DD/MM/YYYY"
                                closeOnSelect
                                value={dob}
                                onChange={(date) => {
                                    setDob(date);
                                }}
                                maxDate={new Date()}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        {...register("birthdate", {
                                            required: true,
                                        })}
                                        fullWidth
                                        size="small"
                                        error={!!errors.birthdate}
                                        helperText={
                                            errors.birthdate ? t("Date of Birh is required") : ""
                                        }
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={t("Email")}
                                variant="outlined"
                                fullWidth
                                size="small"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: t("Enter a valid email account.", {
                                            ns: "reservation",
                                        }),
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email ? t("Mail is required") : ""}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={countries}
                                size="small"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label={t("Country")}
                                        {...register("country", {
                                            required: true,
                                        })}
                                        fullWidth
                                        error={!!errors.country}
                                        helperText={errors.country ? t("Country is required") : ""}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={t("Passport")}
                                variant="outlined"
                                size="small"
                                fullWidth
                                {...register("passport", { required: true })}
                                error={!!errors.passport}
                                helperText={errors.passport ? t("Passport is required") : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>

                        <Autocomplete
                                disablePortal
                                id="cmbCategory"
                                options={options}
                                size="small"
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label={t("Select a category")}
                                        {...register("category", {
                                            required: true,
                                        })}
                                        fullWidth
                                        error={!!errors.country}
                                        helperText={errors.country ? t("Select a category") : ""}
                                    />
                                )}
                            />
                            
                            
                           {/*  <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    {t("Select a category")}
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label={t("Select a category")}
                                    onChange={(value) => setCategory(value.target.value)}>
                                    <MenuItem
                                        value={options[0].label}
                                        className={styles.responsiveText}>
                                        <div
                                            style={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}>
                                            {options[0].label}
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={options[1].label}>{options[1].label}</MenuItem>
                                    <MenuItem value={options[2].label}>{options[2].label}</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label={t("Comments")}
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                {...register("message", {})}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} sx={{ mb: 3 }}>
                            <Box display={"flex"} justifyContent={"center"}>
                                <Button
                                    color="secondary"
                                    size="large"
                                    type="submit"
                                    sx={{ borderRadius: "20px", textTransform: "uppercase" }}
                                    onClick={() => {}}>
                                    <SendRounded sx={{ mr: 1 }} />
                                    {t("Send")}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={3000}>
                <Alert severity={type} sx={{ width: "100%" }}>
                    {message}
                </Alert>
            </Snackbar>

            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openD}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </form>
    );
};
