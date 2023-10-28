import { Avatar, BellIcon, Container, FavIcon, IconButton, Text } from 'src/shared/ui';
import photo from 'src/shared/assets/photo.png';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { Link } from 'react-router-dom';

export const HeaderMenu = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    if (isDesktop) {
        return (
            <Container gap='20px' alignItems='center'>
                <Container alignItems='center'>
                    <IconButton padding='4px' color={Colors.c_02}>
                        <FavIcon />
                    </IconButton>
                    <IconButton padding='4px' color={Colors.c_02}>
                        <BellIcon />
                    </IconButton>
                </Container>

                <Link to={'#'}>
                    <Container gap='8px' alignItems='center'>
                        <Avatar alt='photo of person' src={photo} small />
                        <Text small color={Colors.c_02}>
                            Ivan1234
                        </Text>
                    </Container>
                </Link>
            </Container>
        );
    } else {
        return (
            <Link to={'#'}>
                <Avatar alt='photo of person' src={photo} />
            </Link>
        );
    }
};
