import atSvg from 'src/shared/assets/at-.svg';
import workSvg from 'src/shared/assets/work.svg';
import logoSvg from 'src/shared/assets/logo-sign.svg';
import { css } from '@emotion/react';
import { Container } from 'src/shared/ui';

export const HeaderLogo = () => {
    return (
        <Container alignItems='center' gap='8px'>
            <img
                src={logoSvg}
                alt='logo'
                css={css`
                    display: block;
                `}
            />
            <Container alignItems='center'>
                <img
                    src={atSvg}
                    alt='at'
                    css={css`
                        display: block;
                    `}
                />
                <img
                    src={workSvg}
                    alt='work'
                    css={css`
                        display: block;
                    `}
                />
            </Container>
        </Container>
    );
};
