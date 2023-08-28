import React from 'react'
import Homef from '../Homef'

export default function LandingPage() {
  return (
    <div data-testid="landing-page">
      <img src="https://en-media.thebetterindia.com/uploads/2021/09/Project-Dream-School.jpg?compress=true&quality=80&w=800&dpr=1.3" width='100%'  alt="Landing Page Image"/>
      <Homef data-testid="homef-component"/>
      </div>
  )
}