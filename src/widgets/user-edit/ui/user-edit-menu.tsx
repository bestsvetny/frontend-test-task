import { css } from '@emotion/react';
import photo_lg from 'src/shared/assets/photo_lg.jpg';
import { Box, Card, Category, Container, mediaQueries } from 'src/shared/ui';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';

export const UserEditMenu = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    return (
        <Card padding={isDesktop ? '40px' : '28px'}>
            <Container gap={isDesktop ? '40px' : '24px'} column>
                <Box
                    css={css`
                        display: block;
                        width: 100%;
                        max-height: 485px;
                        ${mediaQueries.mobile} {
                            height: 187px;
                        }
                    `}
                >
                    <img
                        css={css`
                            display: block;
                            width: 100%;
                            max-height: 485px;
                            border-radius: 8px;
                            object-fit: cover;
                            ${mediaQueries.mobile} {
                                width: 100%;
                                height: 100%;
                            }
                        `}
                        alt='photo of person'
                        src={photo_lg}
                    />
                </Box>
                <Container column gap={isDesktop ? '24px' : '20px'} justifyContent='space-between' width='100%'>
                    <Category href={'#'} text='Данные профиля' isActive />
                    <Category href={'#'} text='Рабочее пространство' />
                    <Category href={'#'} text='Приватность' />
                    <Category href={'#'} text='Безопасность' />
                </Container>
            </Container>
        </Card>
    );
};
