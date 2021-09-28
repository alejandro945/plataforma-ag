import React from 'react'

const LabelRequired = (props) => {
    return (
        <label className="text-secondary mb-2">
            {props.name}
            <span className="text-danger">
                {props.state ? "":" *"}
            </span>
        </label>
    )
}

export default LabelRequired
