import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description?: string;
}

const PageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    document.title = `${title} | Kanto`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};

export default PageMeta;
