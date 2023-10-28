import { Container, Divider, ErrorMessage, Grid, Headline, Loader } from 'src/shared/ui';
import { UserItem } from 'src/widgets/user-list/ui/user-item.tsx';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { useEffect } from 'react';
import { fetchUsers, selectActiveUsers, selectInactiveUsers } from 'src/widgets/user-list/model/users-slice.ts';
import { useAppDispatch, useAppSelector } from 'src/app/appStore.ts';
import { FetchStatus } from 'src/shared/types';

export const UserList = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    const dispatch = useAppDispatch();
    const activeUsers = useAppSelector(selectActiveUsers);
    const inactiveUsers = useAppSelector(selectInactiveUsers);
    const status = useAppSelector((state) => state.usersReducer.status);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    return (
        <Container column gap='40px' width='100%'>
            {status === FetchStatus.pending && <Loader />}
            {status === FetchStatus.failure && <ErrorMessage message='Something went wrong' />}
            {status === FetchStatus.succeeded && (
                <>
                    <Container column>
                        <Headline>Активные</Headline>
                        <Divider mTop={isDesktop ? '16px' : '16px'} mBot={isDesktop ? '28px' : '16px'} />

                        <Grid
                            gridTemplateColumns={isDesktop ? '1fr 1fr 1fr' : '1fr 1fr'}
                            gap={isDesktop ? '32px 40px' : '20px 20px'}
                        >
                            {activeUsers.map((user) => (
                                <UserItem user={user} key={user.id} />
                            ))}
                        </Grid>
                    </Container>

                    <Container column>
                        <Headline>Архив</Headline>
                        <Divider />
                        <Grid
                            gridTemplateColumns={isDesktop ? '1fr 1fr 1fr' : '1fr 1fr'}
                            gap={isDesktop ? '32px 40px' : '20px 20px'}
                        >
                            {inactiveUsers.map((user) => (
                                <UserItem user={user} key={user.id} />
                            ))}
                        </Grid>
                    </Container>
                </>
            )}
        </Container>
    );
};
