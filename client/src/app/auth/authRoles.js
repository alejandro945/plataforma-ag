export const authRoles = {
    sa: ['SA'], // Only Super Admin has access
    admin: ['SA', 'ADMIN'], // Only SA & Admin has access
    employee: ['SA', 'ADMIN', 'EMPLOYEE'], // Only SA & Admin & Employee has access
    affiliate: ['SA', 'ADMIN', 'EMPLOYEE', 'AFFILIATE'], // Everyone has access
    operator: ['SA', 'ADMIN', 'EMPLOYEE', 'OPERATOR'], // Everyone has access
}