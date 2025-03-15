// components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Switch } from '@heroui/react';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <Switch
                isSelected={theme === 'dark'}
                onChange={toggleTheme}
                size="lg"
                color="primary"
            >
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Switch>
        </div>
    );
};

export default ThemeToggle;
