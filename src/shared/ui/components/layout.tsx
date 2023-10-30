import styled from '@emotion/styled';

export const Box = styled.div();

type ContainerProps = {
    column?: boolean;
    alignItems?: 'stretch' | 'center' | 'start' | 'end';
    gap?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    justifyContent?: 'center' | 'start' | 'space-between' | 'space-around' | 'space-evenly';
    padding?: string;
};
export const Container = styled.div<ContainerProps>((props) => ({
    display: 'flex',
    width: props.width ? props.width : 'auto',
    maxWidth: props.maxWidth ?? 'none',
    height: props.height ? props.height : 'auto',
    flexDirection: props.column ? 'column' : 'row',
    alignItems: props.alignItems || 'stretch',
    gap: props.gap || '0',
    justifyContent: props.justifyContent || 'start',
    padding: props.padding || ''
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
