import React from 'react';
import styled from '@emotion/styled';
import { CaptionText, Colors, Container, Headline, Text } from 'src/shared/ui';
import { css } from '@emotion/react';
import photo_md from 'src/shared/assets/photo_md.jpg';
import { mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { IExtendedUser } from 'src/widgets/user-list/model/users-slice.ts';
import { ActiveUserDropdown } from 'src/widgets/user-list/ui/active-user-dropdown.tsx';
import { ArchivedUserDropdown } from 'src/widgets/user-list/ui/archived-user-dropdown.tsx';

export const UserItem = React.memo(function UserItem({ user }: { user: IExtendedUser }) {
    return (
        <UserCard>
            <ImageWrapper>
                <Image alt='photo of person' src={photo_md} active={user.isActive} />
            </ImageWrapper>

            <InfoWrapper>
                <Container column gap='4px' width='100%'>
                    <Headline color={user.isActive ? Colors.c_accent : Colors.c_02} css={nameTextStyles}>
                        {user.name}
                    </Headline>
                    <Text small color={user.isActive ? Colors.c_02 : Colors.c_03} css={companyTextStyles}>
                        {user.company.name}
                    </Text>
                </Container>
                <CaptionText color={user.isActive ? Colors.c_03 : Colors.c_04}>{user.address.city}</CaptionText>
                <DropdownWrapper>
                    {user.isActive && <ActiveUserDropdown userId={user.id} />}
                    {!user.isActive && <ArchivedUserDropdown userId={user.id} />}
                </DropdownWrapper>
            </InfoWrapper>
        </UserCard>
    );
});

const UserCard = styled.div({
    display: 'flex',
    gap: '20px',
    minHeight: '112px',
    padding: '24px',
    borderRadius: '16px',
    background: Colors.c_06,
    [mediaQueries.mobile]: {
        flexDirection: 'column',
        minHeight: '242px',
        gap: '16px',
        height: '100%',
        padding: '16px'
    }
});

const ImageWrapper = styled.div({
    display: 'block',
    width: '112px',
    height: '120px',
    [mediaQueries.mobile]: {
        minWidth: '130px',
        width: '100%'
    }
});

const Image = styled.img((props: { active?: boolean }) => ({
    display: 'block',
    width: '112px',
    height: '120px',
    borderRadius: '8px',
    objectFit: 'cover',
    filter: !props.active ? 'grayscale(100%)' : 'none',
    [mediaQueries.mobile]: {
        minWidth: '130px',
        width: '100%'
    }
}));

const InfoWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    paddingRight: '24px',
    [mediaQueries.mobile]: {
        minHeight: '74px',
        height: '100%'
    }
});

const DropdownWrapper = styled.div({
    position: 'absolute',
    top: '0',
    right: '0'
});

const companyTextStyles = css({
    [mediaQueries.desktop]: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '156px'
    },
    [mediaQueries.mobile]: {
        wordBreak: 'break-word'
    }
});

const nameTextStyles = css({
    wordBreak: 'break-word'
});
