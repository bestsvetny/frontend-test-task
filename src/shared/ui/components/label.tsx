import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';

export const Label = styled.label({
    color: Colors.c_01,
    fontWeight: '600',
    [mediaQueries.desktop]: {
        lineHeight: '25px',
        fontSize: '18px'
    },
    [mediaQueries.mobile]: {
        fontSize: '16px'
    }
});
