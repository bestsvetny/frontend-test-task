import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';

type CardProps = {
    padding?: string;
    borderRadius?: string;
};

export const Card = styled.div<CardProps>((props) => ({
    padding: props.padding ? props.padding : '24px',
    borderRadius: props.borderRadius ? props.borderRadius : '16px',
    background: Colors.c_06
}));
