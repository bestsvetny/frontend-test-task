import styled from '@emotion/styled';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { Colors } from 'src/shared/ui/styles/colors.ts';

type BaseTextProps = {
    color?:
        | Colors.c_01
        | Colors.c_02
        | Colors.c_03
        | Colors.c_04
        | Colors.c_05
        | Colors.c_06
        | Colors.c_accent
        | string;
};

export const Title = styled.h1({
    margin: 0,
    fontSize: '24px',
    fontWeight: '600'
});

export const Headline = styled.p<BaseTextProps>((props) => ({
    margin: 0,
    color: props.color ?? Colors.c_01,
    fontSize: '20px',
    fontWeight: '600',
    [mediaQueries.mobile]: {
        fontSize: '18px',
        fontWeight: '600'
    }
}));

type TextProps = BaseTextProps & {
    small?: boolean;
    semibold?: boolean;
};

export const Text = styled.p<TextProps>((props) => ({
    margin: 0,
    color: props.color ?? Colors.c_01,
    fontSize: props.small ? '16px' : '18px',
    fontWeight: props.semibold ? '600' : '500',
    [mediaQueries.mobile]: {
        fontSize: props.small ? '14px' : '16px',
        fontWeight: props.semibold ? '600' : '500'
    }
}));

export const CaptionText = styled.p<BaseTextProps>((props) => ({
    margin: 0,
    color: props.color ?? Colors.c_01,
    fontSize: '14px',
    fontWeight: '500',
    [mediaQueries.mobile]: {
        fontSize: '10px',
        fontWeight: '600'
    }
}));
