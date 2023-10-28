import { css, Global } from '@emotion/react';
import 'normalize.css';
import { Colors } from 'src/shared/ui/styles/colors.ts';

export const GlobalStyles = () => {
    return (
        <>
            <Global
                styles={css`
                    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&family=Roboto&display=swap');

                    * {
                        box-sizing: border-box;
                    }

                    :root {
                        font-family: 'Manrope', sans-serif;
                        line-height: 1.5;
                        font-weight: 400;
                        background: ${Colors.c_05};

                        color-scheme: light dark;

                        font-synthesis: none;
                        text-rendering: optimizeLegibility;
                    }

                    html {
                        margin-right: calc(-1 * (100vw - 100%));
                    }

                    a {
                        text-decoration: none;
                    }
                `}
            />
        </>
    );
};
