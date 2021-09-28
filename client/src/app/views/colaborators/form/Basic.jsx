import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import EmailIcon from '@material-ui/icons/Email';
import { Fragment } from "react";
import LabelRequired from "../../../components/Format/LabelRequired";
import { stringFormat } from "../../../utils";

const Basic = ({ loading, handleChange, register, errors, values: { firstName, lastName, email, gender, phone1, phone2 } }) => {
    //Data
    const genderTypes = ['HOMBRE', 'MUJER', 'OTRO']
    //Validations
    const last = register('lastName', { minLength: { value: 5, message: "⚠️ ¿Que apellido es este?, debe tener al menos 5 letras" } })
    const mail = register('email', { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "⚠️ Uyy, que paso aquí, correo electronico invalido" } })
    const phone = register('phone1', { maxLength: { value: 10, message: "⚠️ Mire Vea, el tamaño maximo es 10" } })

    return (
        <div className="container-sm my-4 shadow-lg p-3 bg-body rounded">
            <div className="mb-2">
                <h4>{loading ? < Skeleton width="30%" height={50} /> : "Datos Basicos"}</h4>
                <p className="fw-lighter">
                    {loading ? <Skeleton width='60%' /> : "Pilas ingresa los datos basicos de nuestro nuevo empleado recuerda manejar la calma."}
                </p>
                <Divider variant="middle" />
            </div>
            {loading ? <Skeleton width="100%" height={100} /> : (
                <Fragment>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <LabelRequired name="Nombre" />
                            <input
                                required
                                className="form-control"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <LabelRequired name="Apellidos" />
                            <input
                                required
                                className="form-control"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => {
                                    last.onChange(e);
                                    handleChange(e);
                                }}
                            />
                            {errors.lastName && <p className="text-danger fw-lighter mb-0">{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <LabelRequired name="Correo electronico" state='false' />
                            <div className="input-group">
                            <span className="input-group-text"><EmailIcon color="secondary" /></span>
                            <input
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    mail.onChange(e);
                                    handleChange(e);
                                }}
                            />
                            </div>
                            {errors.email && <p className="text-danger fw-lighter mb-0">{errors.email.message}</p>}
                        </div>
                        <div className="col-md-6">
                            <FormControl component="fieldset" className="mb-2" >
                                <LabelRequired name=" Género" />
                                <RadioGroup row aria-label="position"
                                    name="gender"
                                    value={gender}
                                    onChange={handleChange}
                                >
                                    {
                                        genderTypes.map((item, key) =>
                                            <FormControlLabel key={key} value={item} control={<Radio required={true} />} label={stringFormat(item.toLowerCase())} />
                                        )
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <LabelRequired name="Telefono 1" />
                            <input
                                required
                                className="form-control"
                                name="phone1"
                                type="number"
                                defaultValue={phone1 || ''}
                                onChange={(e) => {
                                    phone.onChange(e);
                                    handleChange(e);
                                }}
                            />
                            {errors.phone1 && <p className="text-danger fw-lighter mb-0">{errors.phone1.message}</p>}
                        </div>
                        <div className="col-md-6">
                            <LabelRequired name="Telefono 2" state="true" />
                            <input
                                className="form-control"
                                name="phone2"
                                type="number"
                                value={phone2 || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
}
export default Basic;

