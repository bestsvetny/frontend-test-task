import atSvg from 'src/shared/assets/at-.svg';
import workSvg from 'src/shared/assets/work.svg';
import logoSvg from 'src/shared/assets/logo-sign.svg';
import { Container } from 'src/shared/ui';
import styled from '@emotion/styled';

export const HeaderLogo = () => {
    return (
        <Container alignItems='center' gap='8px'>
            <Image src={logoSvg} alt='logo' />
            <Container alignItems='center'>
                <Image src={atSvg} alt='at' />
                <Image src={workSvg} alt='work' />
            </Container>
        </Container>
    );
};

const Image = styled.img({
    display: 'block'
});
