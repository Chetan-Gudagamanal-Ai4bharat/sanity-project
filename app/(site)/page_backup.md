// // useClient()
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../../public/nilekani_center.png'
import { Container } from "@mui/material";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import tempIcon from '../../assets/tempIcon.svg'
import { ThemeProvider } from "styled-components";
import Logo from '../../assets/logo.svg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const impact_axes=[
  {
    id: 1,
    name:'Data',
    desc:'Curate and create the largest public datasets and benchmarks across various tasks and the 22 scheduled languages of India.'
  },
  {
    id: 2,
    name:'AI Models',
    desc:'Build state-of-the-art, open, foundational AI models across tasks and 22 regional Indian languages.'
  },
  {
    id: 3,
    name:'Applications',
    desc:'Design and deploy with partners reference applications to demonstrate potential of open AI models.'
  },
  {
    id: 4,
    name:'Ecosystem',
    desc:'Enable researchers, startups, and govt. to innovate on Indian language AI tech with educational material and workshops.s'
  }
]


const tools_and_models_description=[
  {
    name:'Tools Site',
    desc:'A showcase for the different tools developed at AI4Bharat. Each tool leverages the different models and APIs developed by AI4Bharat.'
  },
  {
    name:'Models Site',
    desc:'A showcase for models features developed at AI4Bharat. Choose one of the areas and try them out in real-time.'
  }
]


const founders=[
  {
    img: 'https://res.cloudinary.com/ai4bharat/image/upload/v1658328315/anoop_kunchukuttan_new_ilf24b.jpg',
    name:'Anoop Kunchukuttan',
    desc:'Researcher at Microsoft'
  },
  {
    img: 'https://res.cloudinary.com/ai4bharat/image/upload/v1658327893/Team%20pictures/Founders/Mitesh_1_n1jtzu.jpg',
    name:'Mitesh Khapra',
    desc:'Associate Professor at CSE Department, IIT Madras'
  },
  {
    img: 'https://res.cloudinary.com/ai4bharat/image/upload/v1657699057/pratyush_kumar_hgkewb.jpg',
    name:'Pratyush Kumar',
    desc:'Researcher at Microsoft Research and Adjunct Faculty at IIT Madras'
  },
  {
    img: 'https://res.cloudinary.com/ai4bharat/image/upload/v1657699030/vivek_raghavan_ugfdjs.jpg',
    name:'Vivek Raghavan',
    desc:'Chief AI Evangelist, EkStep and Mentor, AI4Bharat'
  },
]




export default function Home() {
  const theme = useTheme();
  return (
    <>
    
    <Container disableGutters maxWidth={false} sx={{paddingTop:'50px', alignItems:'center', display:{lg:'flex'}}} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100 px-5 py-20 lg:py-40">
      <div className='flex-1 flex-col gap-50 text-center'>
         <p className="text-gray-500 whitespace-pre-line dark:text-gray-800 animate-move">Artificial-Intelligence For Bhārat</p>
         <h1 className='text-4xl font-extrabold pt-5 mb-5 bg-gradient-to-r from-orange-500 via-orange-700 to-red-500 bg-clip-text text-transparent md:text-6xl lg:text-6xl'>
         AI4BHARAT
         </h1>
        <p className='mb-10 text-[#282828] text-lg pt-10 md:text-2xl sm:px-10 lg:text-2xl'>
        The focus of AI4Bhārat is on building open-source language AI for Indian languages, including datasets, models, and applications.
        </p>
      </div>
      {/* <div className='flex-1 flex-col gap-50 '>
      <Image src={Hero} alt="" sizes='100vw' height={500} className="object-contain rounded-xl m-auto"/>
      </div> */}
    </Container>
    {/* <Container disableGutters maxWidth={false} className="bg-gradient-to-r from-bg-neutral-100 via-bg-neutral-200 to-bg-neutral-500"> */}
    <Container disableGutters maxWidth={false} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100">
    
    
      <div className="px-4 mx-auto text-center py-20 lg:py-40">
          <h1 className='mb-5 text-[#282828] text-3xl font-bold underline decoration-orange-500 underline-offset-8 md:text-3xl lg:text-4xl'> 
          OUR MISSION
          </h1>
          <blockquote className="mt-20 mb-5 text-2xl font-semibold sm:px-10 lg:text-3xl lg:px-25">
            <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <p>"Bring parity with respect to English in AI technologies for Indian languages with open-source contributions in datasets, models, and applications and by enabling an innovation ecosystem."</p>
          </blockquote>    
      </div>
      {/* </div> */}
    </Container>
    <Container disableGutters maxWidth={false} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-40">
      <h1 className='mb-4 text-[#282828] text-3xl font-bold underline decoration-orange-500 underline-offset-8 md:text-3xl lg:text-4xl'> 
      Our Impact Axes
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
        {impact_axes.map((ele,index)=>(
          <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="bg-none rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={tempIcon} alt="Avatar of Jonathan Reinink"/>
                <div className="text-lg text-left">
                  <p className="text-gray-900 font-semibold text-xl leading-none">{ele.name}</p>
                  <p className="text-gray-600">{ele.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Container>

    <Container disableGutters maxWidth={false} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-40">
      <h1 className='mb-4 text-[#282828] text-3xl font-bold underline decoration-orange-500 underline-offset-8 md:text-3xl lg:text-4xl'> 
      Tools and Models
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
        {tools_and_models_description.map((ele,index)=>(
          // <div>
          //   {ele.name}
          // </div>
          <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex">
            {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <Image src={'https://v1.tailwindcss.com/img/jonathan.jpg'} alt="logo" width={50} height={50}/>
            </div> */}
            <div className="bg-none rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              {/* <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div> */}
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={tempIcon} alt="Avatar of Jonathan Reinink"/>
                <div className="text-lg text-left">
                  <p className="text-gray-900 font-semibold text-xl leading-none">{ele.name}</p>
                  <p className="text-gray-600">{ele.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Container>
    <Container disableGutters maxWidth={false} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h1 className='mb-4 text-[#282828] text-3xl font-bold underline decoration-orange-500 underline-offset-8 md:text-3xl lg:text-4xl'> 
            Our Team
          </h1>
          {/* <h2 className="mb-12 text-3xl font-bold">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2> */}
          <div className="mt-20 lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder,index)=>(<div key={index} className="mb-12 lg:mb-0">
              <Image className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20" width={150} height={150} src={founder.img} alt="avatar"/>
              <h5 className="mb-4 text-lg font-bold">{founder.name}</h5>
              <p className="mb-6">{founder.desc}</p>
              {/* <ul className="mx-auto flex list-inside justify-center">
                <a href="#!" className="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-4 w-4 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#!" className="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-4 w-4 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#!" className="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </ul> */}
            </div>))}
          </div>
        </section>
      </div>
    </Container>
    <Container disableGutters maxWidth={false} className="bg-gradient-to-b from-neutral-200 via-neutral-150 to-neutral-100">
      <footer
        className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div
          className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
          {/* <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div> */}
          <div className="flex justify-center">
            
            <a href="https://twitter.com/ai4bharat" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a> */}
            <a href="https://linkedin.com/company/ai4bharat" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://github.com/AI4Bharat" className="text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                
                <Image src={Logo} alt="AI4BHARAT"></Image>
                <span className="pl-4">AI4BHARAT</span>
              </h6>
              <p>
              The focus of AI4Bharat, an initiative of IIT Madras, is on building open-source language AI for Indian languages, including datasets, models, and applications.
              </p>
            </div>
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                AREAS
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                  >Translation</a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                  >Transliteration</a>
              </p>
            </div>
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                RESOURCES
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                  >Datasets</a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                  >Models</a>
              </p>
            </div>
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                CONTACT
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Address: Department of 
                Computer Science and Engineering, 
                IIT Madras, 
                Tamil Nadu - 600036
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd" />
                </svg>
                + 91 000 00 00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          {/* <span>© 2023 Copyright:</span> */}
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://github.com/AI4Bharat/ai4bharat.org"
            >Made with 🧡 and open-source by AI4Bhārat</a>
        </div>
      </footer>
    </Container>
    
    </>
  );
}