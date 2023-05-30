import { atom } from 'recoil';

const LocalStorageKey = 'isDark';
export const isDarkState = atom<boolean>({
    key: 'isDarkState',
    default: (() => {
        if (typeof window === 'undefined') {
            return true;
        }
        const isDark = localStorage.getItem(LocalStorageKey);
        return !isDark || isDark == 'y';
    })(),
    effects: [
        ({ onSet }) => {
            onSet((newValue) => {
                localStorage.setItem(LocalStorageKey, newValue ? 'y' : 'n');
            });
        },
    ],
});
