import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { Container, Grid } from 'src/shared/ui';
import { UserEditForm } from 'src/widgets/user-edit/ui/user-edit-form.tsx';
import { UserEditMenu } from 'src/widgets/user-edit/ui/user-edit-menu.tsx';

export const UserEdit = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    return (
        <Container column>
            <Grid gridTemplateColumns={isDesktop ? '1fr 2.5fr' : '1fr'} gap='32px 40px'>
                <UserEditMenu />
                <UserEditForm />
            </Grid>
        </Container>
    );
};
