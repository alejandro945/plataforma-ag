import React, { Suspense } from 'react'
import Loading  from '../Loading/Load'

const Suspend = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default Suspend