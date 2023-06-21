import React from "react";

import HomeLogo from '../../assets/home-logo.png'
import { Container, HomeImg } from './styles'
import {CategoryCaroussel, OffersCaroussel} from "../../components";


export function Home() {

    return (
        <Container>
            <HomeImg src={HomeLogo} alt="Logo da home" />
            <CategoryCaroussel />
            <OffersCaroussel />
        </Container>
    )
}
