import React from 'react'
import Navbar from '../Homev2/components/Navbar'
import Footer from '../Homev2/components/Footer'
import FounderHero from './Components/FounderHero/FounderHero'

import "./founderClub.css"
import HowWork from './Components/HowItWork/HowWork'
import FounderBenefits from './Components/FounderBenefits/FounderBenefits'
import WhyJoin from './Components/WhyJoinFounder/WhyJoin'
import FounderNetworking from './Components/FounderNetworking/FounderNetworking'
import ExclusivityAuthority from './Components/ExclusivityAuthority/ExclusivityAuthority'
import FounderTestimonials from './Components/FounderTestimonials/FounderTestimonials'
import FounderContact from './Components/FounderContactUs/FounderContact'
import FounderAccordion from './Components/FounderAccordion/FounderAccordion'


const items = [
    {
        title: `I'm new to web3 and feel out of my depth. Will I still fit in?`, content: `Absolutely! We all started somewhere, and The Matrix Labs prides itself on being an inclusive space where
    questions are encouraged, and learning is a sharedjourney.` },
    { title: 'How can I trust that my proprietary ideas will be safe?', content: 'Trust is the cornerstone of our community. We uphold a strict confidentiality code and foster an environment where sharing is done responsibly and respectfully.' },
    {
        title: `Is thisjust another networking group?`, content: `Far from it. While networking is a component, we delve deeper into the nuts and bolts Of running a web3 business,
    from technical troubleshooting to coping with market volatility. Think of us as your advisory board, sounding
    board, and support group, all rolled into one.`}
];


const FoundersClub = () => {
    return (
        <div style={{ overflow: "hidden", position: "relative", zIndex: "2" }}>
            <Navbar />
            <FounderHero />
            <HowWork />
            <ExclusivityAuthority />
            <FounderNetworking />
            <WhyJoin />
            <FounderBenefits />
            <FounderTestimonials />
            <FounderContact />
            <FounderAccordion items={items} />  {/* Frequently Asked Questions */}
            <Footer />
        </div>
    )
}

export default FoundersClub