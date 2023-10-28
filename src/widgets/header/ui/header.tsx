import { Container } from 'src/shared/ui';
import { css } from '@emotion/react';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { HeaderLogo } from './header-logo.tsx';
import { HeaderMenu } from './header-menu.tsx';

export const Header = () => {
    return (
        <header
            css={css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: Colors.c_06,
                padding: '16px 10px',
                [mediaQueries.mobile]: {
                    padding: '11px 16px'
                }
            })}
        >
            <Container
                justifyContent='space-between'
                css={css`
                    width: 100%;
                    max-width: 1160px;
                `}
            >
                <HeaderLogo />
                <HeaderMenu />
            </Container>
        </header>
    );
};
