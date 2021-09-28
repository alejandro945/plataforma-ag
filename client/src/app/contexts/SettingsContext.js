import React, { createContext, useState } from 'react'

import { merge } from 'lodash'

import { LayoutSettings } from '../components/Layout/settings'

const SettingsContext = createContext({
    settings: LayoutSettings,
    updateSettings: () => {},
})

export const SettingsProvider = ({props }) => {
    const [currentSettings, setCurrentSettings] = useState(
        settings
    )

    const handleUpdateSettings = (update = {}) => {
        const merged = merge({}, currentSettings, update)
        setCurrentSettings(merged)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: currentSettings,
                updateSettings: handleUpdateSettings,
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext
