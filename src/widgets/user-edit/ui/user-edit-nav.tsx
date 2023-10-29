import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import {
    ArrowLeftIcon,
    CaretLeftIcon,
    Colors,
    Container,
    Headline,
    TransitionTime,
    matchMediaQueries,
    Text
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
            <Link
                to={'/'}
                css={css({
                    width: '100%',
                    padding: '13px 10px 13px 8px',
                    color: Colors.c_02
                })}
            >
                <Container
                    gap='14px'
                    alignItems='center'
                    css={css({
                        width: '100%'
                    })}
                >
                    <CaretLeftIcon color='inherit' />

                    <Text color={Colors.c_02} semibold>
                        Назад
                    </Text>
                </Container>
            </Link>
        );
    }
};
