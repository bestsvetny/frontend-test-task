import { Colors, Container, Headline } from 'src/shared/ui';
import success_svg from 'src/shared/assets/checked-box.svg';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';

export const UserEditSuccessMessage = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);

    return (
        <Container column alignItems='center' gap={isDesktop ? '20px' : '16px'}>
            <img src={success_svg} alt='green check' />
            <Headline color={Colors.c_02}>Изменения сохранены!</Headline>
        </Container>
    );
};
