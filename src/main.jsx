import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import '@fontsource/inter';
import '@fontsource/happy-monkey';
import appRouter from "./routes";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const router = appRouter();

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#1A1A1A',
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: '#FFFFFF',
                }
            }
        }
    },
    components: {
        JoyTypography: {
            defaultProps: {
                color: 'var(--joy-colors-text-primary)',
            }
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <RouterProvider router={router} />
        </CssVarsProvider>
    </React.StrictMode>,
)
