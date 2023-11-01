import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';

type DividerProps = {
    mTop?: string;
    mBot?: string;
};

export const Divider = styled.hr<DividerProps>((props) => ({
    width: ' 100%',
    marginTop: props.mTop || '16px',
    marginBottom: props.mBot || '28px',
    border: `0px solid ${Colors.c_04}`,
    outline: `1px solid ${Colors.c_04}`,
    color: Colors.c_04
}));
