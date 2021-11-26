import React from 'react'

const colaboratorsRoutes = [
    {
        path: '/colaborators',
        component: React.lazy(() => import('./form/Colaborator')),
    }
]

export default colaboratorsRoutes
