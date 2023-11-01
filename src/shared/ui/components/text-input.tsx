import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import React, { forwardRef } from 'react';
import { CrossIcon, IconButton } from 'src/shared/ui';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onClear?: () => void;
    isValid?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(
    { onClear, isValid, ...props }: InputProps,
    ref
) {
    return (
        <InputWrapper valid={isValid}>
            <InputBase
                ref={ref}
                {...props}
                type='text'
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                    }
                }}
            />
            {onClear && props.value && (
                <IconButton color={Colors.c_02} onClick={onClear}>
                    <CrossIcon />
                </IconButton>
            )}
        </InputWrapper>
    );
});

const InputWrapper = styled.div((props: { valid?: boolean }) => {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        height: '42px',
        borderRadius: '50px',
        border: `2px solid ${Colors.c_04}`,
        outline: 'none',
        padding: '10px 8px 10px 16px'
    };
    if (!props.valid) {
        Object.assign(styles, {
            transition: 'all 0.2s',
            border: `solid 1px ${Colors.c_error}`,
            boxShadow: `0 0 5px ${Colors.c_error}`
        });
    }
    return styles;
});

const InputBase = styled.input({
    outline: 'none',
    color: Colors.c_01,
    background: 'none',
    border: 'none',
    width: '100%',
    fontSize: '16px',
    fontWeight: '500',
    '::placeholder': {
        color: Colors.c_02
    },
    [mediaQueries.mobile]: {
        fontSize: '14px'
    }
});
