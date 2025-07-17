import Banner from "../Component/Banner"
import General from "../WhatWeDo/General"
import Cards from '../GeneralCards/cards'
import Business from '../OurPortfolio/Business'
import About from "../Testimonial/About"
import Latest from '../Subscribe/Latest'
import Logo from '../Footer/Logo'




const Home = () => {
   return (
    <div>
    
        <Banner />
        <General />
        <Cards />
        <Business />
        <About />
        <Latest />
        <Logo />
    </div>
   )
}

export default Home