import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { FetchStatus } from 'src/shared/types';
import { IUser, UsersApi } from 'src/shared/api/api.ts';
import { RootState } from 'src/app/appStore.ts';

export interface IExtendedUser extends IUser {
    isActive: boolean;
    isHidden: boolean;
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await UsersApi.getAllUsers();
    return response.data.map((user) => ({
        ...user,
        isActive: true,
        isHidden: false
    }));
});

interface UsersState {
    users: Array<IExtendedUser>;
    status: FetchStatus;
    error: string | undefined;
}

const initialState: UsersState = {
    users: [],
    status: FetchStatus.idle,
    error: undefined
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userActiveToggled(state, action: { type: string; payload: number }) {
            state.users = state.users.map((user) => {
                return user.id !== action.payload
                    ? user
                    : {
                          ...user,
                          isActive: !user.isActive
                      };
            });
        },
        userHiddenToggled(state, action: { type: string; payload: number }) {
            state.users = state.users.map((user) => {
                return user.id !== action.payload
                    ? user
                    : {
                          ...user,
                          isHidden: !user.isHidden
                      };
            });
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = FetchStatus.pending;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = FetchStatus.succeeded;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = FetchStatus.failure;
                state.error = action.error.message;
            });
    }
});

const selectUsers = (state: RootState) => state.usersReducer.users;

export const selectActiveUsers = createSelector(selectUsers, (users) =>
    users.filter((user) => user.isActive && !user.isHidden)
);

export const selectInactiveUsers = createSelector(selectUsers, (users) =>
    users.filter((user) => !user.isActive && !user.isHidden)
);

export const { userActiveToggled, userHiddenToggled } = usersSlice.actions;
export default usersSlice.reducer;
