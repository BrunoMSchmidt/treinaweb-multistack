import React from 'react';
import {
    FooterContainer,
    FooterStyled,
    FooterTitle,
    AppList,
} from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle> Quem Somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolore, quasi, magnam, eum nisi corporis deleniti
                        dicta iusto dolorem facere totam molestias esse
                        voluptates incidunt temporibus ratione magni perferendis
                        ipsum architecto.
                    </Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img
                                    src={'/img/logos/app-store.png'}
                                    alt={'App Store'}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img
                                    src={'/img/logos/google-play.png'}
                                    alt={'Google Play'}
                                />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;