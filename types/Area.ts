import { PortableTextBlock } from "sanity";

export type Area={
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url:string;
    content: PortableTextBlock[];
    contributions:Array<{
        contributer: string;
        contributer_desc: string;
        url:string;
      }>;
}