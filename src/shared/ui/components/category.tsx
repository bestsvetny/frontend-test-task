import { Box, Colors, Divider, Text, TransitionTime } from 'src/shared/ui';
import { css } from '@emotion/react';
import { matchMediaQueries, mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { useMediaQuery } from 'src/shared/hooks';
import { Link } from 'react-router-dom';

interface CategoryProps {
    href: string;
    text: string;
    isActive?: boolean;
}
export const Category = ({ href, text, isActive }: CategoryProps) => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    if (isActive) {
        return (
            <Box>
                <Text
                    small
                    css={css({
                        cursor: 'default',
                        transition: `color ${TransitionTime.color}`,
                        color: Colors.c_01
                    })}
                >
                    {text}
                </Text>
                <Divider mTop={isDesktop ? '12px' : '8px'} mBot='0' />
            </Box>
        );
    }
    return (
        <Link to={href}>
            <Text
                small
                css={css({
                    transition: `color ${TransitionTime.color}`,
                    color: Colors.c_03,
                    [mediaQueries.desktop]: {
                        ':hover': {
                            color: Colors.c_accent
                        }
                    }
                })}
            >
                {text}
            </Text>
            <Divider mTop={isDesktop ? '12px' : '8px'} mBot='0' />
        </Link>
    );
};
