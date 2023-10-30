import photo_lg from 'src/shared/assets/photo_lg.jpg';
import { Card, Category, Container, mediaQueries } from 'src/shared/ui';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import styled from '@emotion/styled';

export const UserEditMenu = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    return (
        <Card padding={isDesktop ? '40px' : '28px'}>
            <Container gap={isDesktop ? '40px' : '24px'} column>
                <ImageWrapper>
                    <Image alt='photo of person' src={photo_lg} />
                </ImageWrapper>
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

const ImageWrapper = styled.div({
    display: 'block',
    width: '100%',
    maxHeight: '485px',
    [mediaQueries.mobile]: {
        height: '187px'
    }
});

const Image = styled.img({
    display: 'block',
    width: '100%',
    maxHeight: '485px',
    borderRadius: '8px',
    objectFit: 'cover',
    [mediaQueries.mobile]: {
        width: '100%',
        height: '100%'
    }
});
