import { Dropdown } from 'src/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/appStore.ts';
import { userActiveToggled, userHiddenToggled } from 'src/widgets/user-list/model/users-slice.ts';

export const ActiveUserDropdown = ({ userId }: { userId: number }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleClickEdit = () => {
        navigate(`/user-edit/${userId}`);
    };
    const handleClickArchive = () => {
        dispatch(userActiveToggled(userId));
    };
    const handleClickHide = () => {
        dispatch(userHiddenToggled(userId));
    };
    return (
        <Dropdown>
            <Dropdown.Toggle />
            <Dropdown.List>
                <Dropdown.Item onClick={handleClickEdit}>Редактировать</Dropdown.Item>
                <Dropdown.Item onClick={handleClickArchive}>Архивировать</Dropdown.Item>
                <Dropdown.Item onClick={handleClickHide}>Скрыть</Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    );
};
