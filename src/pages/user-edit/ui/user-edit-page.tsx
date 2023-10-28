import { Container } from 'src/shared/ui';
import { css } from '@emotion/react';
import { UserEdit } from 'src/widgets/user-edit';
import { UserEditNav } from 'src/widgets/user-edit/ui/user-edit-nav.tsx';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';

export const UserEditPage = () => {
    return (
        <Container
            column
            gap='24px'
            css={css({
                width: '100%',
                maxWidth: '1160px',
                paddingBottom: '40px',
                [mediaQueries.mobile]: {
                    gap: '20px',
                    paddingBottom: '20px'
                }
            })}
        >
            <UserEditNav />
            <UserEdit />
        </Container>
    );
};
