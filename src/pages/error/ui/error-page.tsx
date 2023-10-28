import { useRouteError } from 'react-router-dom';
import { Box, Text, Title } from 'src/shared/ui';

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Box id='error-page'>
            <Title>Oops!</Title>
            <Text>Sorry, an unexpected error has occurred.</Text>
            <Text>
                <i>{(error as { statusText: string })?.statusText || (error as Error)?.message}</i>
            </Text>
        </Box>
    );
}
