module.exports = {
    charges: [
        'CONDUCTOR',
        'ASISTENTE CONTABLE',
        'AUXILIAR DE PROCESOS',
        'DIRECTOR OPERATIVO',
        'GERENTE',
        'AFILIADO'
    ],
    roles: {
        Admin: ['ADMIN','ADM_EMPLEADO','AFILIADO','CONDUCTOR'],
        Employee: 'ADM_EMPLEADO',
        Affiliate: 'AFILIADO',
        Driver: 'CONDUCTOR'
    },
    genres: [
        'HOMBRE',
        'MUJER',
        'OTRO'
    ],
    id_types: [
        'TI',
        'CC',
        'NIT',
        'CE'
    ],
    agreement_types: [
        'DEFINIDO',
        'INDEFINIDO'
    ],
    occupation_types: [
        'ESTUDIANTE',
        'EMPLEADO',
        'INDEPENDIETE',
        'DESEMPLEADO'
    ],
    contract_frequencies: [
        'FIJO',
        'OCASIONAL'
    ],
    costumer_types: [
        'NATURAL',
        'JURIDICA'
    ]
}