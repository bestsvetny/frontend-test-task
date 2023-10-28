import { Container, Headline } from 'src/shared/ui';
import { css } from '@emotion/react';
export const ErrorFallback = ({ errorMessage }: { errorMessage: string }) => {
    return (
        <Container
            justifyContent='center'
            css={css`
                padding: 50px;
            `}
        >
            <Headline>{errorMessage}</Headline>
        </Container>
    );
};
