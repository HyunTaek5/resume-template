export interface MetadataType {
  title: string;
  metaList: { id: number; name: string; content: string; }[];
  link: { rel: string; href: string; };
}