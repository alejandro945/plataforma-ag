import React from 'react'
import { Skeleton } from '@material-ui/lab';
import { Divider } from '@material-ui/core';
import { Fragment } from 'react';
import LabelRequired from '../../../components/Format/LabelRequired';

const Places = ({ loading, handleChange, address }) => {

    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <div className="mb-2">
                <h4>{loading ? <Skeleton width="30%" height={50} /> : "Lugares importantes"}</h4>
                <p className="fw-lighter">
                    {loading ? <Skeleton width='60%' /> : "Vea necesitamos los lugares mas importantes de nuestro nuevo empleado. 🧐"}
                </p>
                <Divider variant="middle" />
            </div>
            {loading ? <Skeleton width="100%" height={100} /> : (
                <Fragment>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="col-md-6">
                            <LabelRequired name="Dirección Vivienda" state="true" />
                            <input
                                className="form-control"
                                required
                                name="address"
                                value={address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                        </div>
                    </div>


                </Fragment>
            )}
        </div>
    )
}

export default Places;
