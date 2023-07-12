export const menuItems = [
  {
    nombre: 'Inicio',
    link: '/'
  },
  {
    nombre: 'Productos',
    subMenu: [
      {
        nombre: 'Electronics',
        subMenu: [
          {
            nombre: 'Phone',
            link: '/phone'
          },
          {
            nombre: 'Laptop',
            link: '/laptop'
          },
          {
            nombre: 'Computer',
            link: '/computer'
          }
        ]
      },
      {
        nombre: 'Clothing',
        link: '/clothing'
      },
      {
        nombre: 'Books',
        subMenu: [
          {
            nombre: 'Romantic',
            link: '/romantic'
          },
          {
            nombre: 'Bussiness',
            link: '/bussiness'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Servicios',
    subMenu: [
      {
        nombre: 'Web Design',
        link: '/web-design'
      },
      {
        nombre: 'SEO',
        link: '/seo'
      },
      {
        nombre: 'Graphic Design',
        link: '/graphic-design'
      }
    ]
  },
  {
    nombre: 'Somos',
    link: '/somos'
  },
  {
    nombre: 'Contacto',
    link: '/contacto'
  }
];
