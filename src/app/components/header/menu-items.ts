export const menuItems = [
  {
    nombre: 'Inicio',
    link: '/'
  },
  {
    nombre: '¿Quiénes somos?',
    link: '/somos'
  },
  {
    nombre: 'Servicios',
    subMenu: [
      {
        nombre: 'Transporte',
        subMenu: [
          {
            nombre: 'Personal',
            link: '/transporte-de-personal'
          }
        ]
      },
      {
        nombre: 'Alquiler',
        subMenu: [
          {
            nombre: 'Unidades',
            link: '/alquiler-de-unidades'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Certificaciones',
    link: '/certificaciones'
  },
  {
    nombre: 'Contacto',
    link: '/contacto'
  }
];
