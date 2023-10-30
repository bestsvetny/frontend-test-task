import { UserList } from 'src/widgets/user-list';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import styled from '@emotion/styled';

export const MainPage = () => {
    return (
        <UserListContainer>
            <UserList />
        </UserListContainer>
    );
};

const UserListContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1160px',
    padding: '40px 0 40px 0',
    [mediaQueries.mobile]: {
        padding: '32px 0 32px 0'
    }
});
