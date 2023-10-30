import React, { useEffect } from 'react';
import { Colors, CrossIcon, IconButton, ZIndex } from 'src/shared/ui';
import { css, Global } from '@emotion/react';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import styled from '@emotion/styled';

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
            <ModalBackground
                active={active}
                onClick={() => {
                    setActive(false);
                }}
            >
                <ModalContainer
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                    <IconButton
                        css={iconButtonStyles}
                        large
                        onClick={() => {
                            setActive(false);
                        }}
                    >
                        <CrossIcon large />
                    </IconButton>
                </ModalContainer>
            </ModalBackground>
        </>
    );
};

const ModalBackground = styled.div((props: { active: boolean }) => ({
    display: props.active ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(22, 22, 22, 0.24)',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: ZIndex.popupBackground
}));

const ModalContainer = styled.div({
    position: 'relative',
    borderRadius: '16px',
    background: Colors.c_06,
    padding: '40px',
    width: '310px',
    height: '211px',
    zIndex: ZIndex.popup,
    [mediaQueries.mobile]: {
        width: '271px',
        height: '189px',
        padding: '32px'
    }
});

const iconButtonStyles = css({
    position: 'absolute',
    top: '18px',
    right: '18px'
});
