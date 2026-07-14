import type { SiteSettingsContent } from '../../content/siteContent';

export type SiteNavigationModel = SiteSettingsContent['navigation'] & {
  logoSubtitle?: string;
};

export function getSiteNavigation(siteSettings: SiteSettingsContent): SiteNavigationModel {
  return siteSettings.navigation;
}
