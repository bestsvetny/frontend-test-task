import styled from '@emotion/styled';
import { Colors } from 'src/shared/ui/styles/colors.ts';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import React, { forwardRef } from 'react';
import { CrossIcon, IconButton } from 'src/shared/ui';
import { css } from '@emotion/react';

const InputWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    height: '42px',
    borderRadius: '50px',
    border: `2px solid ${Colors.c_04}`,
    outline: 'none',
    padding: '10px 8px 10px 16px'
});

const InputBase = styled.input({
    outline: 'none',
    color: Colors.c_01,
    border: 'none',
    fontWeight: '500',
    '::placeholder': {
        color: Colors.c_02
    },
    [mediaQueries.desktop]: {
        fontSize: '16px'
    },
    [mediaQueries.mobile]: {
        fontSize: '14px'
    }
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onClear?: () => void;
    isValid?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(
    { onClear, isValid, ...props }: InputProps,
    ref
) {
    return (
        <InputWrapper
            css={css(
                !isValid && {
                    transition: 'all 0.2s',
                    border: `solid 1px ${Colors.c_error}`,
                    boxShadow: `0 0 5px ${Colors.c_error}`
                }
            )}
        >
            <InputBase
                ref={ref}
                {...props}
                type='text'
                css={css`
                    width: 100%;
                `}
            />
            {onClear && props.value && (
                <IconButton color={Colors.c_02} onClick={onClear}>
                    <CrossIcon />
                </IconButton>
            )}
        </InputWrapper>
    );
});
