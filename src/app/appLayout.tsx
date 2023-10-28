import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgets/header';
import { css } from '@emotion/react';

export const AppLayout = () => {
    return (
        <>
            <Header />
            <main
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 20px;
                `}
            >
                <Outlet />
            </main>
        </>
    );
};
