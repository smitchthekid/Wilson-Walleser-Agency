import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { brand } from './content';

const SITE_URL = 'https://wilson-walleser.com';

export default function usePageTitle(title?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | ${brand.name}` : `${brand.name} | Digital Marketing Agency`;
  }, [title]);

  // Self-referencing canonical per route (no trailing slash, except the homepage).
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = SITE_URL + (pathname === '/' ? '/' : pathname.replace(/\/+$/, ''));
  }, [pathname]);
}
