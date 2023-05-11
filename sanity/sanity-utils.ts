// All the functions to go grab data
import config from './config/clientConfig'
import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {

    return createClient(config).fetch(
        /* 
        required _id, special cases slug and image, pulling url form image
        Initial query to project all
        */
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`
    )
    
}

export async function getProject(slug: string): Promise<Project>{

    return createClient(config).fetch(
        /* 
        required _id, special cases slug and image, pulling url form image
        Initial query to project all
        */
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`,
          { slug }
    )

}

export async function getPages(): Promise<Page[]> {
    return createClient(config).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
          }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(config).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
          }`,
          { slug }
    )
    
}