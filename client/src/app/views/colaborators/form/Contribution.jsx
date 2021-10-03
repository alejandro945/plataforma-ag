import { Divider, TextField } from '@material-ui/core'
import { Autocomplete, Skeleton } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { getCities, getDepartments } from '../../../../services'
import Currency from '../../../components/Format/CurrencyFormat'
import LabelRequired from '../../../components/Format/LabelRequired'

const Contribution = ({ loading, values: { department, city, salary }, handleChange }) => {
    const [departments, setDepartments] = useState([])
    const [cities, setCities] = useState([])

    const departmentProps = {
        options: departments,
        getOptionLabel: option => option.department_name
    };

    async function renderCities(id) {
        await getCities(id).then(({ data }) => {
            setCities(data);
        })
    }

    useEffect(() => {
        async function loadData() {
            await getDepartments().then(({ data }) => {
                setDepartments(data);
            })
            if (city != null) {
                await renderCities(department.id_department)
            }
        }
        loadData()
    },[])

    return (
        <div className="shadow-lg my-4 p-3 bg-body rounded">
            <div className="mb-2">
                <h4>{loading ? < Skeleton width="30%" height={50} /> : "Contribuciones"}</h4>
                <p className="fw-lighter">
                    {loading ? <Skeleton width='60%' /> : "Pilas ingresa los datos contributivos de nuestro nuevo empleado."}
                </p>
                <Divider variant="middle" />
            </div>
            {loading ? <Skeleton width="100%" height={100} /> : (
                <Fragment>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <Currency name="salary" message="Salario del colaborador" value={salary} handleChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <LabelRequired name=" Departamento expedicion cédula" />
                            <Autocomplete
                                size="small"
                                {...departmentProps}
                                value={department}
                                getOptionSelected={(option, value) =>  option.id_department === value.id_department }
                                onChange={(event, value) => {
                                    {
                                        if (value != null) {
                                            handleChange({ target: { name: "department", value: value } });
                                            renderCities(value.id_department)
                                        } else {
                                            handleChange({ target: { name: "department", value: null } });
                                        }
                                    }
                                }}
                                fullWidth={true}
                                renderInput={(params) => <TextField {...params} variant="outlined" required />}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <LabelRequired name=" Ciudad expedicion cédula" />
                            <Autocomplete
                                size="small"
                                disabled={!department}
                                value={city || null}
                                options={cities}
                                getOptionLabel={(option) => option.city_name}
                                getOptionSelected={(option, value) =>  option.id_city === value.id_city }
                                onChange={(event, value) => {
                                    handleChange({ target: { name: "city", value: value } });
                                }}
                                fullWidth={true}
                                renderInput={(params) => <TextField {...params} variant="outlined" required />}
                            />
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default Contribution;
