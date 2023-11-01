import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgets/header';
import styled from '@emotion/styled';

export const AppLayout = () => {
    return (
        <>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
        </>
    );
};

const StyledMain = styled.main({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '380px',
    padding: '0 20px'
});
