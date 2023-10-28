import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import {
    ArrowLeftIcon,
    Box,
    CaretLeftIcon,
    Colors,
    Container,
    Headline,
    TransitionTime,
    matchMediaQueries
} from 'src/shared/ui';
import { useMediaQuery } from 'src/shared/hooks';

export const UserEditNav = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);

    if (isDesktop) {
        return (
            <Container
                css={css({
                    padding: '20px 0 20px 0'
                })}
            >
                <Link
                    to={'/'}
                    css={css({
                        color: Colors.c_02,
                        transition: `color ${TransitionTime.color}`,
                        ':hover': {
                            color: Colors.c_accent
                        }
                    })}
                >
                    <Container gap='8px' alignItems='center'>
                        <ArrowLeftIcon color='inherit' />
                        <Headline color='inherit'>Назад</Headline>
                    </Container>
                </Link>
            </Container>
        );
    } else {
        return (
            <Box
                css={css({
                    width: '100%',
                    padding: '10px 10px 10px 8px'
                })}
            >
                <Link
                    to={'/'}
                    css={css({
                        width: '100%',
                        color: Colors.c_02
                    })}
                >
                    <Container gap='8px' alignItems='center'>
                        <CaretLeftIcon color='inherit' />
                        <Headline color={Colors.c_02}>Назад</Headline>
                    </Container>
                </Link>
            </Box>
        );
    }
};
