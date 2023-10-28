import { Box, CaptionText, Card, Colors, Container, Headline, Text } from 'src/shared/ui';
import { css } from '@emotion/react';
import photo_md from 'src/shared/assets/photo_md.png';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries, mediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { IExtendedUser } from 'src/widgets/user-list/model/users-slice.ts';
import { ActiveUserDropdown } from 'src/widgets/user-list/ui/active-user-dropdown.tsx';
import { ArchivedUserDropdown } from 'src/widgets/user-list/ui/archived-user-dropdown.tsx';
import React from 'react';

interface ContainerProps {
    user: IExtendedUser;
}
export const UserItem = React.memo(function UserItem({ user }: ContainerProps) {
    const isMobile = useMediaQuery(matchMediaQueries.mobile);

    return (
        <Card
            css={css`
                min-height: 112px;
                padding: 24px;
                ${mediaQueries.mobile} {
                    min-height: 242px;
                    padding: 16px;
                }
            `}
        >
            <Container
                gap='20px'
                column={isMobile}
                css={css`
                    ${mediaQueries.mobile} {
                        height: 100%;
                    }
                `}
            >
                <img
                    css={css`
                        display: block;
                        width: 112px;
                        height: 120px;
                        border-radius: 8px;
                        filter: ${!user.isActive ? 'grayscale(100%)' : 'none'};
                        ${mediaQueries.mobile} {
                            width: 130px;
                        }
                    `}
                    alt='photo of person'
                    src={photo_md}
                />
                <Container
                    column
                    justifyContent='space-between'
                    css={css`
                        position: relative;
                        width: 100%;
                        padding-right: 24px;
                        ${mediaQueries.mobile} {
                            height: 100%;
                        }
                    `}
                >
                    <Container
                        column
                        gap='4px'
                        css={css`
                            width: 100%;
                        `}
                    >
                        <Headline
                            color={user.isActive ? Colors.c_accent : Colors.c_02}
                            css={css`
                                word-break: break-word;
                            `}
                        >
                            {user.name}
                        </Headline>
                        <Text
                            small
                            color={user.isActive ? Colors.c_02 : Colors.c_03}
                            css={css`
                                ${mediaQueries.desktop} {
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    max-width: 156px;
                                }
                            `}
                        >
                            {user.company.name}
                        </Text>
                    </Container>
                    <CaptionText color={user.isActive ? Colors.c_03 : Colors.c_04}>{user.address.city}</CaptionText>
                    <Box
                        css={css`
                            position: absolute;
                            top: 0;
                            right: 0;
                        `}
                    >
                        {user.isActive && <ActiveUserDropdown userId={user.id} />}
                        {!user.isActive && <ArchivedUserDropdown userId={user.id} />}
                    </Box>
                </Container>
            </Container>
        </Card>
    );
});
