'use client'

import { getArea } from "@/sanity/sanity-utils";
import { Container } from "@mui/material";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props={
    params:{area: string}
}
export default async function Area({params}:Props){
    const slug=params.area;
    const area =await getArea(slug)

    return (
        <>
        <Container disableGutters maxWidth={false} sx={{paddingTop:'50px', alignItems:'center'}} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100 px-5 py-20 lg:py-40">
            
        <header className="flex item-center justify-between">
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{area.name}</h1>
            {/* <a className="bg-gray-100 rounded-lg text-grey-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition" href={area.url} title="view Project" target="_blank" rel="noopener noreferrer">
                View Project
            </a> */}
        </header>
        {/* content goes here */}
        <div className="text-lg text-gray-700 mt-5">
            <PortableText value={area.content}/>
            
            
        </div>
        </Container>
        {area.contributions.length &&
        <Container disableGutters maxWidth={false} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100">    
            {/* <section x-data="xData()" className="bg-gray-100 dark:bg-gray-900 py-10 px-12"> */}
            {/* <div className="container mx-auto md:px-6 py-20 lg:py-40"> */}
                <section className="text-center mx-auto md:px-6 py-10 lg:py-20">
                <h1 className='mb-8 text-[#282828] text-3xl font-bold underline decoration-orange-500 underline-offset-8 md:text-3xl lg:text-4xl'> 
                    Our Contributions
                </h1>
                    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {/* <template x-for="post in posts"> */}
                            {area.contributions.map((c,index)=>(
                            <div
                                key={index}
                                className="bg-neutral-100 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                                <Link href='#'>
                                    <figcaption className="p-4">
                                        <p
                                            className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                                            x-text="c.contributer">{c.contributer}
                                        </p>

                                        <small
                                            className="leading-5 text-gray-500 dark:text-gray-400"
                                            x-text="c.desc">{c.contributer_desc}
                                        </small>
                                    </figcaption>
                                </Link>
                                
                            </div>))}
                        {/* </template> */}
                    </div>
                </section>
            {/* </div> */}
            {/* </section> */}
        </Container>
        }
		
        
        </> 
    )
}