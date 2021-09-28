import { Button, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { saveCollaborator } from '../../../../services';
import Mixin from '../../../components/Alerts/Mixin';
import DefaultAvatar from '../../../components/Avatar/DefaultAvatar';
import { getAvatar, upperFormat } from '../../../utils';
import Basic from './Basic';
import Contribution from './Contribution';
import Identification from './Identification';
import Places from './Places';

const index = () => {
    //Validations
    const { register, formState: { errors } } = useForm({
        mode: "onChange",
    });
    //Hooks
    useEffect(() => {
        const timeId = setInterval(() => {
            setLoading(false)
            clearInterval(timeId)
        }, 2000)
    })

    const [loading, setLoading] = useState(true);
    
    const [collaborator, setCollaborator] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        type_id: '',
        type_license: '',
        number_id: 0,
        phone1: 0,
        phone2: 0,
        address: '',
        salary: 0,
        department: {id_department:31,department_name:'VALLE DEL CAUCA'},
        city: {id_city:1098,city_name:'PALMIRA'},
        born: null,
        expedition: null,
        licenseExpiration: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'department') setCollaborator({ ...collaborator, city: null });
        setCollaborator((prev) => ({
            ...prev,
            [name]: upperFormat(value)
        }));
    };

    const onSubmit = (event) => {
           saveCollaborator(collaborator).then(response => {
                if (response.status===200) {
                    Mixin('Empleado guardado exitosamente','success');
                }else{
                    Mixin('Error 500','error');
                }
            }).catch(error => {
                Mixin('Error en el servidor','error');
            })
            event.preventDefault();
    };

    return (
        <div className="container my-4">
            <div className="mb-2 text-center">
                <h2>Empleados</h2>
                <p className="lead">
                    En esta session podrás crear a los colaboradores de nuestra organización.
                </p>
                <Divider variant="middle" />
            </div>
            <form onSubmit={onSubmit}>
                {(getAvatar()!='')? <DefaultAvatar name={getAvatar()} />:''}
                <Basic loading={loading} handleChange={handleChange} register={register} errors={errors} values={collaborator} />
                <Identification loading={loading} handleChange={handleChange} register={register} errors={errors} values={collaborator} />
                <Contribution loading={loading} values={collaborator} handleChange={handleChange} />
                <Places loading={loading} address={collaborator.address} handleChange={handleChange} />
                <div className="row my-3 d-flex justify-content-center">
                    <Button
                        type="submit"
                        style={{ width: '50%' }}
                        variant="contained"
                        color="secondary"
                    >
                        Guardar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default index;
