export interface MenuTypes {
  nombre: string;
  link?: string;
  subMenu?: MenuTypes[];
  abiertoSubMenu?: boolean;
  estaActivo?: boolean;
}
