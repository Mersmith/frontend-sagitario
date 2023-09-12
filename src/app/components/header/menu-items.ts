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
        link: '/transporte-de-personal'
      },
      {
        nombre: 'Alquiler',
        link: '/alquiler-de-unidades'
      }
    ]
  }
  ,
  {
    nombre: 'Certificaciones',
    link: '/certificaciones'
  },
  {
    nombre: 'Contacto',
    link: '/contacto'
  }
];
