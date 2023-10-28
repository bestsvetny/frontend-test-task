import { css } from '@emotion/react';
import photo_lg from 'src/shared/assets/photo_lg.png';
import { Box, Card, Category, Container } from 'src/shared/ui';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';

export const UserEditMenu = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    return (
        <Card padding={isDesktop ? '40px' : '28px'}>
            <Container gap='40px' column>
                <Box
                    css={css`
                        display: block;
                        position: relative;
                        border-radius: 8px;
                        width: 100%;
                        height: ${isDesktop ? '485px' : '187px'};
                        background-image: url(${photo_lg});
                        background-size: cover;
                        background-position: center;
                    `}
                ></Box>
                <Container column gap='24px' justifyContent='space-between' width='100%'>
                    <Category href={'#'} text='Данные профиля' isActive />
                    <Category href={'#'} text='Рабочее пространство' />
                    <Category href={'#'} text='Приватность' />
                    <Category href={'#'} text='Безопасность' />
                </Container>
            </Container>
        </Card>
    );
};
