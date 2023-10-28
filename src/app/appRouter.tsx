import { createHashRouter } from 'react-router-dom';
import { AppLayout } from './appLayout.jsx';
import { ErrorPage } from 'src/pages/error';
import { MainPage } from 'src/pages/main';
import { UserEditPage } from 'src/pages/user-edit';

export const appRouter = createHashRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/user-edit/:userId',
                element: <UserEditPage />
            }
        ]
    }
]);
