import * as React from 'react';
import { Account } from '@toolpad/core/Account';
import { AppProvider } from '@toolpad/core/AppProvider';
import { Box, Typography } from '@mui/material';

const demoSession = {
    user: {
        name: 'Mohammed Omar',
        role: 'Technical Support',
    },
};

export default function AccountCustomSlotProps() {
    const [session, setSession] = React.useState(demoSession);

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Mohammed Omar',
                        role: 'Technical Support',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    return (
        <AppProvider authentication={authentication} session={session}>
            {/* preview-start */}
            <Box sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '14px',
                color: "#F9F9F9",
            }}>
                <Typography>Hello,
                    <span sx={{
                        fontStyle: "bold"
                    }}>
                        {session.user.name}
                    </span>
                </Typography>
                <Typography>
                    {session.user.role}

                </Typography>
            </Box>
            {/* preview-end */}
        </AppProvider>
    );
}
