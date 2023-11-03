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
    { title: 'How can I trust that my proprietary ideas will be safe?', content: 'Trust is the cornerstone of our community. We uphold a strict confidentiality code and foster an environment where sharing is done responsibly and respectfully.' },
    { title: 'How can I trust that my proprietary ideas will be safe?', content: 'Trust is the cornerstone of our community. We uphold a strict confidentiality code and foster an environment where sharing is done responsibly and respectfully.' },
    { title: 'How can I trust that my proprietary ideas will be safe?', content: 'Trust is the cornerstone of our community. We uphold a strict confidentiality code and foster an environment where sharing is done responsibly and respectfully.' }
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