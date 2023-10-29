import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';

type DividerProps = {
    mTop?: string;
    mBot?: string;
    thin?: boolean;
};

export const Divider = styled.hr<DividerProps>((props) => {
    const styles = {
        width: ' 100%',
        marginTop: props.mTop || '16px',
        marginBottom: props.mBot || '28px'
    };
    if (props.thin) {
        Object.assign(styles, {
            border: `0px solid ${Colors.c_04}`,
            outline: `1px solid ${Colors.c_04}`
        });
    } else {
        Object.assign(styles, {
            border: `1px solid ${Colors.c_04}`
        });
    }
    return styles;
});
