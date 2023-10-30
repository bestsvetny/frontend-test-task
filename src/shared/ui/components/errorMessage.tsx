import styled from '@emotion/styled';

export const ErrorMessage = ({ message }: { message: string }) => {
    return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

const StyledErrorMessage = styled.div({
    margin: '20px auto'
});
