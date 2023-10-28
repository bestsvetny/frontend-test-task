import { UserList } from 'src/widgets/user-list';
import { Container } from 'src/shared/ui';
import { css } from '@emotion/react';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';

export const MainPage = () => {
    return (
        <>
            <Container
                column
                alignItems='center'
                css={css({
                    width: '100%',
                    maxWidth: '1160px',
                    [mediaQueries.desktop]: {
                        padding: '40px 0 40px 0'
                    },
                    [mediaQueries.mobile]: {
                        maxWidth: '343px',
                        padding: '32px 0 32px 0'
                    }
                })}
            >
                <UserList />
            </Container>
        </>
    );
};
