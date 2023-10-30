import { Container } from 'src/shared/ui';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { HeaderLogo } from './header-logo.tsx';
import { HeaderMenu } from './header-menu.tsx';
import styled from '@emotion/styled';

export const Header = () => {
    return (
        <StyledHeader>
            <Container justifyContent='space-between' width='100%' maxWidth='1160px'>
                <HeaderLogo />
                <HeaderMenu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: Colors.c_06,
    padding: '16px 10px',
    [mediaQueries.mobile]: {
        padding: '11px 16px'
    }
});
