import { UserEdit } from 'src/widgets/user-edit';
import { UserEditNav } from 'src/widgets/user-edit/ui/user-edit-nav.tsx';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import styled from '@emotion/styled';

export const UserEditPage = () => {
    return (
        <UserEditContainer>
            <UserEditNav />
            <UserEdit />
        </UserEditContainer>
    );
};

const UserEditContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
    maxWidth: '1160px',
    paddingBottom: '40px',
    [mediaQueries.mobile]: {
        gap: '20px',
        paddingBottom: '20px'
    }
});
