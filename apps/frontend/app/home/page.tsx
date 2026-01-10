import FeatureCardOne from '@/components/myComponents/FeatureCardOne'
import FeatureCardThree from '@/components/myComponents/FeatureCardThree'
import FeatureCardTwo from '@/components/myComponents/FeatureCardTwo'
import Footer from '@/components/myComponents/Footer'
import Hero from '@/components/myComponents/Hero'
import NavBar from '@/components/myComponents/NavBar'
import React from 'react'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <FeatureCardOne/>
        <FeatureCardTwo/>
        <FeatureCardThree/>
        <Footer/>
    </div>
  )
}

 
