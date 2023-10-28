import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter.jsx';
import { ErrorBoundary, ErrorFallback } from 'src/shared/utils';
import { GlobalStyles } from 'src/shared/ui/styles/global.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import appStore from './appStore.ts';

function App() {
    return (
        <>
            <GlobalStyles />
            <ErrorBoundary fallback={<ErrorFallback errorMessage='Something went wrong' />}>
                <ReduxProvider store={appStore}>
                    <RouterProvider router={appRouter} />
                </ReduxProvider>
            </ErrorBoundary>
        </>
    );
}

export default App;
