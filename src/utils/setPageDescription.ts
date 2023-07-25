export default function setPageDescription(description: string): void {
  const metaTag: HTMLMetaElement = document.createElement('meta');
  metaTag.name = 'description';
  metaTag.content = description;

  const headElement = document.head;
  const existingMetaTag = headElement.querySelector('meta[name="description"]');

  if (existingMetaTag) {
    (existingMetaTag as HTMLMetaElement).content = description;
  } else {
    headElement.appendChild(metaTag);
  }
}
