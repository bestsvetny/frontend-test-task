import { css } from '@emotion/react';

interface ErrorProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorProps) => {
    return (
        <div
            css={css`
                margin: 20px auto;
            `}
        >
            {message}
        </div>
    );
};
