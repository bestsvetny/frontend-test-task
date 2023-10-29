import styled from '@emotion/styled';

export const Box = styled.div();

type ContainerProps = {
    column?: boolean;
    alignItems?: 'stretch' | 'center' | 'start' | 'end';
    gap?: string;
    height?: string;
    width?: string;
    justifyContent?: 'center' | 'start' | 'space-between' | 'space-around' | 'space-evenly';
};
export const Container = styled.div<ContainerProps>((props) => ({
    display: 'flex',
    width: props.width ? props.width : 'auto',
    height: props.height ? props.height : 'auto',
    flexDirection: props.column ? 'column' : 'row',
    alignItems: props.alignItems || 'stretch',
    gap: props.gap || '0',
    justifyContent: props.justifyContent || 'start'
}));

type GridProps = {
    column?: boolean;
    gridTemplateColumns?: string;
    gap?: string;
};

export const Grid = styled.div<GridProps>((props) => ({
    display: 'grid',
    gridTemplateColumns: props.gridTemplateColumns ?? 'auto',
    gap: props.gap || '0'
}));
