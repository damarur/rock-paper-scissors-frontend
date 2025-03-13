import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, MatToolbar, MatIconModule, MatSelect, MatOption],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage: string = '';
  constructor(private readonly translate: TranslateService) {
    this.selectedLanguage = translate.currentLang;
  }

  changeLanguage(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}
