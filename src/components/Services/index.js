import React from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-3.png'

import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer >
        <ServicesH1>Nossos Serviços</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Automação de processos</ServicesH2>
                <ServicesP>Nos podemos automatizar seu processo</ServicesP>              
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Sites e websites</ServicesH2>
                <ServicesP>Nos podemos criar seu site gfgfg</ServicesP>              
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Consultoria em auto</ServicesH2>
                <ServicesP>Nos podemos automatizar seu processo</ServicesP>              
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services