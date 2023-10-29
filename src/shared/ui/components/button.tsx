import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { TransitionTime } from 'src/shared/ui/styles/variables.ts';

export const Button = styled.button({
    cursor: 'pointer',
    fontWeight: '600',
    padding: '12px 42px',
    borderRadius: '50px',
    color: Colors.c_06,
    background: Colors.c_01,
    border: 'none',
    width: '100%',
    height: '46px',
    transition: `all ${TransitionTime.color}`,
    [mediaQueries.desktop]: {
        maxWidth: '170px',
        fontSize: '16px',
        '&:hover:enabled': {
            color: Colors.c_02,
            background: Colors.c_05
        }
    },
    [mediaQueries.mobile]: {
        height: '44px',
        fontSize: '14px'
    }
});

type IconButtonProps = {
    color?:
        | Colors.c_01
        | Colors.c_02
        | Colors.c_03
        | Colors.c_04
        | Colors.c_05
        | Colors.c_06
        | Colors.c_accent
        | string;
    large?: boolean;
    padding?: string;
};

export const IconButton = styled.button<IconButtonProps>((props) => ({
    cursor: 'pointer',
    background: 'none',
    padding: props.padding ? props.padding : 0,
    border: 'none',
    height: props.large ? '28px' : '24px',
    width: props.large ? '28px' : '24px',
    color: props.color ? props.color : Colors.c_01,
    transition: `color ${TransitionTime.color}`,
    [mediaQueries.desktop]: {
        '&:hover': {
            color: Colors.c_accent
        },
        '&:active': {
            color: Colors.c_02
        }
    },
    [mediaQueries.mobile]: {
        '&:active': {
            color: Colors.c_02
        }
    }
}));
