import { getProjects } from "@/sanity/sanity-utils";
import Image from 'next/image'
import Link from "next/link";


export default async function Home() {
  
  //New Next JS thing that returns an array with correct props and schema
  const projects = await getProjects();

  return (
    
    <div className="max-w-5xl mx-auto">

      <p className="text-base font-extrabold" >
        <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-lg">Círculo de lectura online híbrido para discutir textos y medios relacionados a la música, el sonido y su creación.</span>
      </p>
      <p className="mt'3 text-xl text-gray-800">Puedes revisar los textos que buscamos leer y discutir. Si te interesa compartir, participar o saber más no dudes en contactarnos.</p>
     <h2 className="mt-24 font-bold text-gray-800 text-3xl">Publicaciones:</h2>
     <div className="mt-5 grid md:grid-cols2 lg:grid-cols-3 gap-8">
      {projects.map((project) => 
      <Link 
      key={project._id} 
      className="flex flex-col justify-center items-center border border-gray-500 rounded-lg p-1 hover:border-blue-500 transition"
      href={`/projects/${project.slug}`}
      >
         <div className="font-extrabold bg-gradient-to-r from-gray-500 from-10% to-indigo-500 to-90% bg-clip-text text-transparent mt-2">
          {project.name}
        </div>        
        {project.image && (
          <Image 
          src={project.image}
          alt={project.name}
          width={750}
          height={300}
          className="object-cover rounded-lg border border-gray-500 m-1"
          />
        )}
      
        </Link>
      )}
      </div>
    </div>
  
  )
}
