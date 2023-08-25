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
            nombre: 'Transporte de personal',
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
  }
  ,
  {
    nombre: 'Política',
    link: '/politica'
  },
  {
    nombre: 'Contacto',
    link: '/contacto'
  }
];
