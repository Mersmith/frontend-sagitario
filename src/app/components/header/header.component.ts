import { Component, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from './menu-items';
import { MenuTypes } from './menu-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) { }

  abiertoMenuCelular: boolean = false;

  menuItems: MenuTypes[] = menuItems;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const headerElement = this.elementRef.nativeElement.querySelector('header');
    if (!headerElement.contains(event.target)) {
      this.resetearEstadoSubMenu();
      this.abiertoMenuCelular = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const anchoPantalla = window.innerWidth;
    if (anchoPantalla >= 768) {
      this.resetearEstadoSubMenu();
      this.abiertoMenuCelular = false;
    }
  }

  toogleSubMenu1(menuItem: MenuTypes) {
    if (menuItem.subMenu) {
      if (menuItem.abiertoSubMenu) {
        menuItem.abiertoSubMenu = false;
        menuItem.estaActivo = false;
      } else {
        this.resetearEstadoSubMenu();
        menuItem.abiertoSubMenu = true;
        menuItem.estaActivo = true;
      }
    } else {
      this.resetearEstadoSubMenu();
      this.redirigirRuta(menuItem.link);
    }
  }

  toggleSubMenu2(subMenuItem: MenuTypes) {
    if (subMenuItem.subMenu) {
      this.menuItems.forEach((menuItem) => {
        if (menuItem.subMenu) {
          menuItem.subMenu.forEach((item) => {
            if (item !== subMenuItem) {
              item.abiertoSubMenu = false;
            }
          });
        }
      });
    }
    else {
      this.resetearEstadoSubMenu();
      this.redirigirRuta(subMenuItem.link);
    }
    subMenuItem.abiertoSubMenu = !subMenuItem.abiertoSubMenu;
  }

  toggleSubMenu3(subMenuItem: MenuTypes) {
    if (subMenuItem.subMenu) {
      this.menuItems.forEach((menuItem) => {
        if (menuItem.subMenu) {
          menuItem.subMenu.forEach((item) => {
            if (item !== subMenuItem) {
              item.abiertoSubMenu = false;
            }
          });
        }
      });
    }
    else {
      this.resetearEstadoSubMenu();
      this.redirigirRuta(subMenuItem.link);
    }
    subMenuItem.abiertoSubMenu = !subMenuItem.abiertoSubMenu;
  }

  private resetearEstadoSubMenu() {
    this.menuItems.forEach((menuItem) => {
      menuItem.abiertoSubMenu = false;
      menuItem.estaActivo = false;

      if (menuItem.subMenu) {
        menuItem.subMenu.forEach((subMenuItem) => {
          subMenuItem.abiertoSubMenu = false;
        });
      }
    });
  }

  redirigirRuta(link?: string) {
    if (link) {
      this.router.navigateByUrl(link);
    }
  }

  toogleMenuCelular() {
    this.abiertoMenuCelular = !this.abiertoMenuCelular;
    this.resetearEstadoSubMenu();
  }
}

