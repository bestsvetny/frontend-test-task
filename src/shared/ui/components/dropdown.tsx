import React, { createContext, useContext, useState } from 'react';
import { Box, Colors, IconButton, MoreIcon, Text, ZIndex } from 'src/shared/ui';
import { css, SerializedStyles } from '@emotion/react';
import { mediaQueries, TransitionTime } from 'src/shared/ui';

type DropdownState = { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> };
const DropdownContext = createContext<DropdownState | null>(null);

const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (context === null) {
        throw new Error('useDropdown must be used within a DropdownContext Provider');
    }
    return context;
};

interface DropdownProps {
    children: React.ReactNode;
    css?: SerializedStyles;
}

export const Dropdown: React.FC<DropdownProps & React.HTMLAttributes<HTMLElement>> & {
    Toggle: typeof Toggle;
    List: typeof List;
    Item: typeof Item;
} = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownContext.Provider value={{ open, setOpen }}>
            {open && (
                <Box
                    onClick={() => setOpen(false)}
                    css={css`
                        z-index: ${ZIndex.popupBackground};
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                    `}
                ></Box>
            )}
            <Box
                css={css`
                    position: relative;
                `}
            >
                {children}
            </Box>
        </DropdownContext.Provider>
    );
};

const Toggle = () => {
    const { open, setOpen } = useDropdown();

    return (
        <IconButton onClick={() => setOpen((prevState) => !prevState)} color={open ? Colors.c_accent : ''}>
            <MoreIcon />
        </IconButton>
    );
};

const List = ({ children }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => {
    const { open } = useDropdown();
    return (
        open && (
            <ul
                css={css`
                    background: ${Colors.c_06};
                    z-index: ${ZIndex.popup};
                    position: absolute;
                    box-shadow: 0 0 2px 0 #5a5a5a;
                    top: 20px;
                    right: 0;
                    border-radius: 12px;
                    padding: 8px;
                    width: 200px;
                    ${mediaQueries.mobile} {
                        width: 160px;
                        top: 16px;
                        right: -16px;
                    }
                `}
            >
                {children}
            </ul>
        )
    );
};

const Item = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <li
            role='button'
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                handleKeyDown(e);
            }}
            css={css`
                padding: 8px;
                list-style: none;
            `}
        >
            <Text
                small
                css={css`
                    transition: color ${TransitionTime.color};
                    :hover {
                        color: ${Colors.c_accent};
                        cursor: pointer;
                    }
                `}
            >
                {children}
            </Text>
        </li>
    );
};

Dropdown.Item = Item;
Dropdown.List = List;
Dropdown.Toggle = Toggle;
