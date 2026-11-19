import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeGatheringInfo } from './home-gathering-info';
import { HomeSocialLinks } from './home-social-links';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, HomeGatheringInfo, HomeSocialLinks],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
