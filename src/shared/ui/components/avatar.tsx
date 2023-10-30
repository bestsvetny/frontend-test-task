import styled from '@emotion/styled';

export const Avatar = styled.img((props: { small?: boolean }) => ({
    display: 'block',
    width: props.small ? '20px' : '28px',
    borderRadius: '50%'
}));
