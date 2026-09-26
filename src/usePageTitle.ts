import { useEffect } from 'react';
import { brand } from './content';

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${brand.name}` : `${brand.name} | Digital Marketing Agency`;
  }, [title]);
}
