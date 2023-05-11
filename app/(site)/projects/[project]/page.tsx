import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'

type Props = {
    params: {project: string}
}

// params comes from route aparently
export default async function Project({params} : Props){
    const slug= params.project;
    const project = await getProject(slug);
    return(
        <div className=' max-w-3xl mx-auto py-20'>
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-6xl font-extrabold">{project.name}</h1>
                <a
                    href={project.url}
                    title="View project"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 rounded-lg text-gray-600 font-bold py-3 px-4 whitespace-nowrap hover:bg-indigo-500 hover:text-indigo-100 transition"
                    target="_blank">
                    Materiales
                </a>
            </header>

            {/*content*/}
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content} />
            </div>
            {/*image*/}
            <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />
        </div>
    )
}