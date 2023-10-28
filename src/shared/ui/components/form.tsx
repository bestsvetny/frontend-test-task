import styled from '@emotion/styled';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { Container, Label } from 'src/shared/ui';
import React from 'react';

export const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    [mediaQueries.desktop]: {
        gap: '24px'
    },
    [mediaQueries.mobile]: {
        gap: '20px'
    }
});

interface FormItemProps {
    children: React.ReactNode;
    label?: string;
    labelFor?: string;
}

export const FormItem = ({ children, label, labelFor }: FormItemProps) => {
    return (
        <Container column gap='10px'>
            {label && <Label htmlFor={labelFor}>{label}</Label>}
            {children}
        </Container>
    );
};
