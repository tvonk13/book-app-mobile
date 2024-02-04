import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Main from "./src/Main";

const queryClient = new QueryClient();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        secondaryContainer: 'transparent',
    }
};

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider theme={theme}>
                <Main />
            </PaperProvider>
        </QueryClientProvider>
    );
}