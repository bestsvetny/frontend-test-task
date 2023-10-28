import React, { useEffect } from 'react';
import { Box, Colors, CrossIcon, IconButton, ZIndex } from 'src/shared/ui';
import { css, Global } from '@emotion/react';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';

interface ModalProps {
    children: React.ReactNode;
    active: boolean;
    setActive: (isActive: boolean) => void;
}

export const Modal = ({ children, setActive, active }: ModalProps) => {
    useEffect(() => {
        if (active) {
            const timerId = setTimeout(() => setActive(false), 4000);
            return () => clearTimeout(timerId);
        }
    }, [active, setActive]);

    return (
        <>
            <Global
                styles={css`
                    html {
                        overflow-y: ${active ? 'hidden' : 'scroll'};
                    }
                `}
            />
            <Box
                css={css`
                    display: ${active ? 'flex' : 'none'};
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(22, 22, 22, 0.24);
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: ${ZIndex.popupBackground};
                `}
                onClick={() => {
                    setActive(false);
                }}
            >
                <Box
                    css={css`
                        position: relative;
                        border-radius: 16px;
                        background: ${Colors.c_06};
                        padding: 40px;
                        width: 310px;
                        height: 211px;
                        z-index: ${ZIndex.popup};
                        ${mediaQueries.mobile} {
                            width: 271px;
                            height: 189px;
                            padding: 32px;
                        }
                    `}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                    <IconButton
                        css={css`
                            position: absolute;
                            top: 18px;
                            right: 18px;
                        `}
                        large
                        onClick={() => {
                            setActive(false);
                        }}
                    >
                        <CrossIcon large />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};
