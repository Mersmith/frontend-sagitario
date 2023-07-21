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
            nombre: 'Personal y alquiler de unidades',
            link: '/romantic'
          },
          {
            nombre: 'Carga pesada y afines',
            link: '/bussiness'
          }
        ]
      },
      {
        nombre: 'Alquiler',
        subMenu: [
          {
            nombre: 'Maquinaria pesada',
            link: '/romantic'
          },
          {
            nombre: 'Unidades',
            link: '/romantic'
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
