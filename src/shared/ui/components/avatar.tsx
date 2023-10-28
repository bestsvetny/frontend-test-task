import { css } from '@emotion/react';

interface AvatarProps {
    small?: boolean;
    src: string;
    alt: string;
}

export const Avatar = ({ small, src, alt }: AvatarProps) => {
    return (
        <img
            css={css`
                display: block;
                width: ${small ? '20px' : '28px'};
                border-radius: 50%;
            `}
            alt={alt}
            src={src}
        />
    );
};
