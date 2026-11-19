import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the home page and site navigation', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('We are a church that');
    expect(compiled.querySelector('main > section:first-child')?.classList.contains('pastors')).toBe(true);
    expect(compiled.querySelector('nav a[href="/about"]')?.textContent).toContain('Our story');
    expect(compiled.querySelector('.pastors-message a.button[href="/about"]')?.textContent).toContain(
      'Get to know us',
    );
    expect(
      compiled.querySelector('footer a[href="https://www.youtube.com/@BetesdaChurchMiami"]'),
    ).toBeTruthy();
    expect(
      compiled.querySelector(
        'footer a[href="https://www.facebook.com/profile.php?id=100080451068962"]',
      ),
    ).toBeTruthy();
    expect(compiled.querySelectorAll('footer .social-icon')).toHaveLength(3);
    expect(compiled.querySelector('header img.brand-mark[src="betesda-church-logo.png"]')).toBeTruthy();
    expect(compiled.querySelector('footer img.brand-mark[src="betesda-church-logo.png"]')).toBeTruthy();
    expect(compiled.textContent).toContain('We are a church that');
    expect(compiled.textContent).toContain('loves and practices love.');
    expect(compiled.textContent).toContain('We love because He first loved us.');
    expect(compiled.querySelector('img[src="pastor-and-wife.jpg"]')?.getAttribute('alt')).toBe(
      "Betesda Church's pastor and his wife",
    );
    expect(compiled.querySelectorAll('app-home-social-links a')).toHaveLength(3);
    expect(
      compiled.querySelector('app-home-social-links a[aria-label="Betesda Church on Facebook"]'),
    ).toBeTruthy();
    expect(compiled.querySelector('app-home-social-links .youtube-icon .icon-play')).toBeTruthy();
    expect(compiled.querySelector('main > app-home-gathering-info .quick-info')).toBeTruthy();
    expect(compiled.textContent).toContain('Sharing with family');
    expect(compiled.textContent).toContain('11:00 AM');
    expect(compiled.textContent).toContain('12200 SW 56th St');

    await TestBed.inject(Router).navigateByUrl('/visit');
    fixture.detectChanges();
    expect(compiled.querySelector('.gathering .social-links')).toBeNull();
    expect(compiled.querySelectorAll('footer .social-icon')).toHaveLength(3);
  });
});
