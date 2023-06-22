import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Area } from "@/types/Area";

export async function getProjects(): Promise<Project[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )
}

export async function getProject(slug:string): Promise<Project>{
    
    return createClient(clientConfig).fetch(
        groq`*[_type=="project" && slug.current==$slug][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`,
        {slug}
    )
}


export async function getPages(): Promise<Page[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type=="page"]{
            _id,
            _createdAt,
            name,
            title,
            "slug":slug.current,
        }`
    )
}

export async function getPage(slug:string): Promise<Page>{
    
    return createClient(clientConfig).fetch(
        groq`*[_type=="page" && slug.current==$slug][0]{
            _id,
            _createdAt,
            name,
            title,
            "slug":slug.current,
            content
        }`,
        {slug}
    )
}



export async function getAreas(): Promise<Area[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type=="area"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content,
            contributions
        }`
    )
}

export async function getArea(slug:string): Promise<Area>{
    
    return createClient(clientConfig).fetch(
        groq`*[_type=="area" && slug.current==$slug][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content,
            contributions
        }`,
        {slug}
    )
}
