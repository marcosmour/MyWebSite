import React, { useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Temos a solução para sua empresa</HeroH1>
            <HeroP>
                Tudo que você precisa para automação da sua linha
                de produção, nois podemos te ajudar.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="contact" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary
                dark
                >
                    Fale conosco {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;