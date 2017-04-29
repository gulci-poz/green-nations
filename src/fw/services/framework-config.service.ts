import {Injectable} from '@angular/core';

export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

// we can pass as many props as we want, they're optional
// we have to specify type in interface
// ? matches props with public props of the class
export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFiles>;
}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();

  constructor() {
  }

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

}
