import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { css } from '@emotion/css';
import { Colors } from 'src/shared/ui/styles/colors.ts';

type ColorIconProps = {
    color?:
        | Colors.c_01
        | Colors.c_02
        | Colors.c_03
        | Colors.c_04
        | Colors.c_05
        | Colors.c_06
        | Colors.c_accent
        | string;
};

type CrossIconProps = {
    large?: boolean;
};

export const CrossIcon = ({ large }: CrossIconProps) => {
    if (large) {
        return (
            <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='Solid/Interface/Cross'>
                    <path
                        id='Union'
                        d='M18.7433 10.494C19.085 10.1523 19.085 9.59823 18.7433 9.25653C18.4016 8.91482 17.8476 8.91482 17.5059 9.25653L13.9998 12.7626L10.4937 9.25653C10.152 8.91482 9.598 8.91482 9.25629 9.25653C8.91458 9.59823 8.91458 10.1523 9.25629 10.494L12.7624 14L9.25628 17.5061C8.91457 17.8478 8.91457 18.4018 9.25628 18.7435C9.59799 19.0852 10.152 19.0852 10.4937 18.7435L13.9998 15.2375L17.5059 18.7435C17.8476 19.0853 18.4016 19.0853 18.7433 18.7435C19.085 18.4018 19.085 17.8478 18.7433 17.5061L15.2372 14L18.7433 10.494Z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        );
    } else {
        return (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='Solid/Interface/Cross'>
                    <path
                        id='Union'
                        d='M16.0659 8.99469C16.3588 8.70179 16.3588 8.22692 16.0659 7.93403C15.773 7.64113 15.2981 7.64113 15.0052 7.93403L12 10.9392L8.99482 7.93403C8.70192 7.64113 8.22705 7.64113 7.93416 7.93403C7.64126 8.22692 7.64126 8.70179 7.93416 8.99469L10.9394 11.9999L7.93415 15.0051C7.64125 15.298 7.64125 15.7729 7.93415 16.0658C8.22704 16.3586 8.70191 16.3586 8.99481 16.0658L12 13.0605L15.0052 16.0658C15.2981 16.3586 15.773 16.3586 16.0659 16.0658C16.3588 15.7729 16.3588 15.298 16.0659 15.0051L13.0607 11.9999L16.0659 8.99469Z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        );
    }
};

export const BellIcon = () => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='mi:notification'>
                <g id='Group'>
                    <path
                        id='Vector'
                        d='M6.73936 2.04978C6.84095 1.79869 7.01521 1.58366 7.23981 1.43225C7.4644 1.28084 7.72909 1.19995 7.99995 1.19995C8.27081 1.19995 8.53551 1.28084 8.7601 1.43225C8.98469 1.58366 9.15895 1.79869 9.26054 2.04978C10.266 2.32629 11.1529 2.92523 11.785 3.75459C12.417 4.58395 12.7594 5.59788 12.7595 6.64066V9.83428L14.0051 11.7027C14.0734 11.8051 14.1126 11.9241 14.1186 12.0471C14.1246 12.17 14.0971 12.2923 14.039 12.4009C13.9809 12.5094 13.8945 12.6001 13.7889 12.6634C13.6833 12.7266 13.5625 12.76 13.4394 12.76H10.3559C10.274 13.3265 9.99082 13.8445 9.55815 14.2191C9.12546 14.5937 8.57229 14.8 7.99995 14.8C7.42762 14.8 6.87444 14.5937 6.44176 14.2191C6.00908 13.8445 5.72587 13.3265 5.644 12.76H2.56052C2.43743 12.76 2.31664 12.7266 2.21103 12.6634C2.10543 12.6001 2.01898 12.5094 1.96091 12.4009C1.90284 12.2923 1.87532 12.17 1.88129 12.0471C1.88727 11.9241 1.9265 11.8051 1.99482 11.7027L3.24045 9.83428V6.64066C3.24045 4.44857 4.7227 2.60188 6.73936 2.04978ZM6.75693 12.76C6.88679 13.1826 7.0742 13.4409 7.27637 13.584C7.44862 13.7059 7.78928 13.7713 8.00029 13.7713C8.2113 13.7713 8.5765 13.7313 8.8347 13.5486C9.16238 13.3167 9.24851 12.959 9.31873 12.76H6.75693ZM7.99995 2.85273C7.09831 2.85273 5.9363 3.28174 5.29874 3.91929C4.66118 4.55685 4.30301 5.73901 4.30301 6.64066V10.0403C4.30304 10.1746 4.26329 10.3059 4.18878 10.4177L3.24045 11.7027H12.7595L11.8042 10.4177C11.73 10.3058 11.6905 10.1745 11.6907 10.0403V6.64066C11.6907 5.73901 11.3325 4.55685 10.695 3.91929C10.0574 3.28174 8.90159 2.85273 7.99995 2.85273Z'
                        fill='currentColor'
                    />
                </g>
            </g>
        </svg>
    );
};

export const FavIcon = () => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='ic:baseline-favorite-border'>
                <path
                    id='Vector'
                    d='M7.54316 3.85453L7.99998 4.39097L8.45679 3.85453C9.04423 3.16469 9.94805 2.72793 10.88 2.72793C12.5198 2.72793 13.8 4.0081 13.8 5.64793C13.8 6.66044 13.35 7.62601 12.4355 8.74406C11.5142 9.87052 10.185 11.0773 8.52493 12.5827L8.52407 12.5834L7.99844 13.0619L7.47549 12.5895C7.47527 12.5893 7.47504 12.5891 7.47482 12.5889C5.81493 11.0805 4.48592 9.87227 3.56453 8.74501C2.64992 7.62605 2.19998 6.66045 2.19998 5.64793C2.19998 4.0081 3.48015 2.72793 5.11998 2.72793C6.0519 2.72793 6.95572 3.16469 7.54316 3.85453Z'
                    stroke='currentColor'
                    strokeWidth='1.2'
                />
            </g>
        </svg>
    );
};

export const ArrowLeftIcon = ({ color }: ColorIconProps) => {
    const styles = css`
        display: block;
        color: ${color ?? Colors.c_01};
    `;
    return (
        <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={styles}
        >
            <g id='arrow-left'>
                <path
                    id='Vector'
                    d='M11.25 9H0.75'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    id='Vector_2'
                    d='M6 14.25L0.75 9L6 3.75'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
        </svg>
    );
};

export const CaretLeftIcon = ({ color }: ColorIconProps) => {
    const styles = css`
        display: block;
        color: ${color ?? Colors.c_01};
    `;
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={styles}
        >
            <g id='Solid/Interface/Caret down'>
                <path
                    id='Icon'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.7803 16.5303C13.4874 16.8232 13.0126 16.8232 12.7197 16.5303L8.71967 12.5303C8.42678 12.2374 8.42678 11.7626 8.71967 11.4697L12.7197 7.46967C13.0126 7.17678 13.4874 7.17678 13.7803 7.46967C14.0732 7.76256 14.0732 8.23744 13.7803 8.53033L10.3107 12L13.7803 15.4697C14.0732 15.7626 14.0732 16.2374 13.7803 16.5303Z'
                    fill='currentColor'
                />
            </g>
        </svg>
    );
};

export const MoreIcon = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);
    if (isDesktop) {
        return (
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
                <g
                    id='Property 1=Interface, Property 2=More, State=Default, Size=Desktop'
                    clipPath='url(#clip0_10_6608)'
                >
                    <path
                        id='Vector'
                        fill='currentColor'
                        d='M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z'
                    />
                </g>
                <defs>
                    <clipPath id='clip0_10_6608'>
                        <rect width='24' height='24' fill='white' />
                    </clipPath>
                </defs>
            </svg>
        );
    } else {
        return (
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <g
                    id='Property 1=Interface, Property 2=More, State=Default, Size=Mobile'
                    clipPath='url(#clip0_28_7959)'
                >
                    <path
                        id='Vector'
                        fill='currentColor'
                        d='M11 14.75C11 15.4375 11.5625 16 12.25 16C12.9375 16 13.5 15.4375 13.5 14.75C13.5 14.0625 12.9375 13.5 12.25 13.5C11.5625 13.5 11 14.0625 11 14.75ZM11 7.25C11 7.9375 11.5625 8.5 12.25 8.5C12.9375 8.5 13.5 7.9375 13.5 7.25C13.5 6.5625 12.9375 6 12.25 6C11.5625 6 11 6.5625 11 7.25ZM11 11C11 11.6875 11.5625 12.25 12.25 12.25C12.9375 12.25 13.5 11.6875 13.5 11C13.5 10.3125 12.9375 9.75 12.25 9.75C11.5625 9.75 11 10.3125 11 11Z'
                    />
                </g>
                <defs>
                    <clipPath id='clip0_28_7959'>
                        <rect width='24' height='24' fill='white' />
                    </clipPath>
                </defs>
            </svg>
        );
    }
};
