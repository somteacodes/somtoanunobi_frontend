/// <reference types="vite/client" />
type Project = {
  data: ProjectEntity[] | [];
  meta: Meta;
};
type ProjectEntity = {
  id: number;
  attributes: PropertyAttribute;
};
type PropertyAttribute = {
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  summary: string;
  images?: Images|null;
  technologies?: Technologies;
};
type Technologies = {
  data?: TechnologyEntity[] | null;
};
type Images = {
  data?: ImageEntity[] | null;
};
type TechnologyEntity = {
  id: number;
  attributes: TechnologyAttribute;
};
type TechnologyAttribute = {
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon:{data:ImageEntity}
};
type Meta = {
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type ImageEntity = {
  id: number;
  attributes: ImageAttribute;
}
type ImageAttribute ={

    name:              string;
    alternativeText?:   string|null;
    caption?:           string|null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl?:        string|null;
    provider:          string;
    provider_metadata?: string|null;
    createdAt:         Date;
    updatedAt:         Date;

}
type Medium= {
  name:   string;
  hash:   string;
  ext:    string;
  mime:   string;
  path:   null;
  width:  number;
  height: number;
  size:   number;
  url:    string;
}

type Formats ={
  thumbnail: Medium;
  medium:    Medium;
  small:     Medium;
}