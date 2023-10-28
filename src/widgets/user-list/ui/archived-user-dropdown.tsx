import { Dropdown } from 'src/shared/ui/components/dropdown.tsx';
import { userActiveToggled } from 'src/widgets/user-list/model/users-slice.ts';
import { useAppDispatch } from 'src/app/appStore.ts';

export const ArchivedUserDropdown = ({ userId }: { userId: number }) => {
    const dispatch = useAppDispatch();
    const handleClickActivate = () => {
        dispatch(userActiveToggled(userId));
    };
    return (
        <Dropdown>
            <Dropdown.Toggle />
            <Dropdown.List>
                <Dropdown.Item onClick={handleClickActivate}>Активировать</Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    );
};
