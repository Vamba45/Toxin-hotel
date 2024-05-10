import { useAppSelector } from "./useAppSelector";


export function useAuth() {
    const {...args} = useAppSelector(state => state.user);

    return {
        args
    }
}