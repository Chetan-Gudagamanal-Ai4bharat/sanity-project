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
    
    Welcome
    
    </>
  );
}