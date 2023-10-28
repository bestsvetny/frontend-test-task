import { useCallback } from 'react';
import { UsersApi } from 'src/shared/api';
import { useRequest } from 'src/shared/hooks';

export const useGetUser = (userId: string | undefined) => {
    if (!userId) {
        throw new Error('No id provided');
    }

    const getUserCallback = useCallback(() => {
        return UsersApi.getUser(userId);
    }, [userId]);

    return useRequest(getUserCallback);
};
