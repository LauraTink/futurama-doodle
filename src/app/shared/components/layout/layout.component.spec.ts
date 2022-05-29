import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './layout.component';
import { By } from '@angular/platform-browser';

describe('LayoutComponent', () => {
  let fixture: ComponentFixture<LayoutComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [LayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LayoutComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all menu harnesses', async () => {
    const menues = await loader.getAllHarnesses(MatMenuHarness);
    expect(menues.length).toBe(1);
  });

  it('should get menu text', async () => {
    const [firstMenu] = await loader.getAllHarnesses(MatMenuHarness);
    expect(await firstMenu.getTriggerText()).toBe('menu');
  });

  it('should open and close', async () => {
    const menu = await loader.getHarness(
      MatMenuHarness.with({ triggerText: 'menu' })
    );
    expect(await menu.isOpen()).toBe(false);
    await menu.open();
    expect(await menu.isOpen()).toBe(true);
    await menu.close();
    expect(await menu.isOpen()).toBe(false);
  });

  it('should get all mat menu items', async () => {
    const menu = await loader.getHarness(
      MatMenuHarness.with({ triggerText: 'menu' })
    );
    await menu.open();
    expect((await menu.getItems()).length).toBe(3);
  });

  it('should get display navigatation links', async () => {
    const navigation = fixture.debugElement.queryAll(By.css('.navigation-links'));
    expect(navigation.length).toBe(1);
  });

  it('should get display layout container', async () => {
    const layout = fixture.debugElement.queryAll(By.css('.layout-container'));
    expect(layout.length).toBe(1);
  });
});
