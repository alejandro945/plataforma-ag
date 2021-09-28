import { Divider, TextField } from '@material-ui/core';
import { Autocomplete, Skeleton } from '@material-ui/lab';
import React from 'react'
import { Fragment } from 'react'
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Popover from '../../../components/Popover';
import LabelRequired from '../../../components/Format/LabelRequired';

const Identification = ({ loading, handleChange, register, errors, values: { type_id, number_id,type_license, born, expedition, licenseExpiration } }) => {
    const idType = ["CC", "CE", "TI"];
    const licenseType = ["A1", "A2", "B1", "B2", "B3", "C1", "C2", "C3"];
    const idNumber = register("number_id", { minLength: { value: 5, message: "⚠️ El tamaño minimo es 5, lo sentimos" } })
    const maxDate = new Date();

    return (
        <div className="shadow-lg my-4 p-3 bg-body rounded">
            <div className="mb-2">
                <h4>{loading ? < Skeleton width="30%" height={50} /> : "Documentos de Identificación"}</h4>
                <p className="fw-lighter">
                    {loading ? <Skeleton width='60%' /> : "Pilas ingresa la información de los documentos de nuestro nuevo empleado."}
                </p>
                <Divider variant="middle" />
            </div>
            {loading ? <Skeleton width="100%" height={100} /> : (
                <Fragment>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <LabelRequired name=" Tipo de documento" />
                            <Autocomplete
                                size="small"
                                options={idType}
                                value={type_id}
                                onChange={(event, value) => { { handleChange({ target: { name: "type_id", value: value } }) } }}
                                style={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} variant="outlined" required />}
                            />
                        </div>
                        <div className="col-md-6">
                            <LabelRequired name=" Numero de documento" />
                            <input
                                required
                                className="form-control"
                                name="number_id"
                                type="number"
                                value={number_id || ''}
                                onChange={(e) => {
                                    idNumber.onChange(e);
                                    handleChange(e);
                                }}
                            />
                            {errors.number_id && <p className="text-danger fw-lighter mb-0">{errors.number_id.message}</p>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <LabelRequired name=" Numero de licencia" state="true" />
                            <input
                                className="form-control"
                                disabled
                                value={number_id || ''}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex">
                            <LabelRequired name="Tipo de Licencia" />
                            <Popover>
                                    <HelpOutlineIcon color="secondary" />
                            </Popover>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text"><RecentActorsIcon color="secondary" /></span>
                                <select className="form-select" name="type_license" value={type_license} onChange={handleChange} required>
                                    <option value="">Seleciona un Tipo</option>
                                    {licenseType.map((item, key) =>
                                        <option key={key} value={item}>{item}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <LabelRequired name=" Fecha de Nacimiento" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    placeholder="MM/DD/AAAA"
                                    required
                                    variant="dialog"
                                    inputVariant="outlined"
                                    size="small"
                                    invalidDateMessage="❌ Ojo con esto, debe ser una fecha válida"
                                    maxDate={maxDate.setMonth(maxDate.getMonth() - 216)}
                                    maxDateMessage="🔞 Debe ser mayor de edad"
                                    style={{ width: '100%' }}
                                    format="MM/dd/yyyy"
                                    value={born}
                                    onChange={(e, value) => {
                                        handleChange({ target: { name: "born", value: value } });
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="col-lg-4">
                            <LabelRequired name=" Fecha de Expedicion Documento" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    placeholder="MM/DD/AAAA"
                                    variant="dialog"
                                    required
                                    inputVariant="outlined"
                                    size="small"
                                    invalidDateMessage="❌ Ojo con esto, debe ser una fecha válida"
                                    maxDate={new Date()}
                                    maxDateMessage="⁉️ Calmate!, Fecha excede el presente"
                                    disableFuture={true}
                                    style={{ width: '100%' }}
                                    format="MM/dd/yyyy"
                                    value={expedition}
                                    onChange={(e, value) => {
                                        handleChange({ target: { name: "expedition", value: value } });
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="col-lg-4">
                            <LabelRequired name=" Fecha de Vencimiento Licencia" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    placeholder="MM/DD/AAAA"
                                    variant="dialog"
                                    required
                                    inputVariant="outlined"
                                    size="small"
                                    invalidDateMessage="❌ Ojo con esto, debe ser una fecha válida"
                                    minDate={new Date()}
                                    minDateMessage="⁉️ Rectifica... Licencia Vencida"
                                    disablePast={true}
                                    style={{ width: '100%' }}
                                    format="MM/dd/yyyy"
                                    value={licenseExpiration}
                                    onChange={(e, value) => {
                                        handleChange({ target: { name: "licenseExpiration", value: value } });
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default Identification
