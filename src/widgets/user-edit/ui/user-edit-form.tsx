import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    Button,
    Card,
    Divider,
    Form,
    FormItem,
    TextInput,
    Modal,
    Title,
    Loader,
    ErrorMessage,
    mediaQueries,
    Container
} from 'src/shared/ui';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserEditSuccessMessage } from './user-edit-success-message.tsx';
import { IFormInput } from '../types/types.tsx';
import { useGetUser } from 'src/widgets/user-edit/api/queries.ts';
import styled from '@emotion/styled';

export const UserEditForm = () => {
    const isDesktop = useMediaQuery(matchMediaQueries.desktop);

    const { userId } = useParams();

    const [modalActive, setModalActive] = useState(false);
    const setModalActiveCallback = useCallback((isActive: boolean) => {
        setModalActive(isActive);
    }, []);

    const { control, handleSubmit, reset, resetField, formState } = useForm({
        defaultValues: {
            name: '',
            username: '',
            email: '',
            city: '',
            phone: '',
            company: ''
        }
    });

    const { data, isLoading, isError, isSuccess } = useGetUser(userId);

    useEffect(() => {
        if (data) {
            reset({
                name: data.name,
                username: data.username,
                email: data.email,
                city: data.address.city,
                phone: data.phone,
                company: data.company.name
            });
        }
    }, [data, reset]);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        setModalActive(true);
    };

    return (
        <>
            <Card padding={isDesktop ? '40px' : '28px'}>
                <Container column>
                    <Title>Данные профиля</Title>
                    <Divider mTop={isDesktop ? '16px' : '16px'} mBot={isDesktop ? '24px' : '20px'} />
                    {isLoading && <Loader />}
                    {isError && <ErrorMessage message='Something went wrong' />}
                    {isSuccess && (
                        <>
                            <FormWrapper>
                                <Form id='edit-form' onSubmit={handleSubmit(onSubmit)}>
                                    <FormItem label='Имя' labelFor='name'>
                                        <Controller
                                            name='name'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextInput
                                                    {...field}
                                                    id='name'
                                                    onClear={() => resetField('name', { defaultValue: '' })}
                                                    isValid={!formState.errors?.name}
                                                    aria-required='true'
                                                />
                                            )}
                                        />
                                    </FormItem>
                                    <FormItem label='Никнейм' labelFor='username'>
                                        <Controller
                                            name='username'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextInput
                                                    {...field}
                                                    id='username'
                                                    onClear={() => resetField('username', { defaultValue: '' })}
                                                    isValid={!formState.errors?.username}
                                                    aria-required='true'
                                                />
                                            )}
                                        />
                                    </FormItem>
                                    <FormItem label='Почта' labelFor='email'>
                                        <Controller
                                            name='email'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextInput
                                                    {...field}
                                                    id='email'
                                                    onClear={() => resetField('email', { defaultValue: '' })}
                                                    isValid={!formState.errors?.email}
                                                    aria-required='true'
                                                />
                                            )}
                                        />
                                    </FormItem>
                                    <FormItem label='Город' labelFor='city'>
                                        <Controller
                                            name='city'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextInput
                                                    {...field}
                                                    id='city'
                                                    onClear={() => resetField('city', { defaultValue: '' })}
                                                    isValid={!formState.errors?.city}
                                                    aria-required='true'
                                                />
                                            )}
                                        />
                                    </FormItem>
                                    <FormItem label='Телефон' labelFor='phone'>
                                        <Controller
                                            name='phone'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextInput
                                                    {...field}
                                                    id='phone'
                                                    onClear={() => resetField('phone', { defaultValue: '' })}
                                                    isValid={!formState.errors?.phone}
                                                    aria-required='true'
                                                />
                                            )}
                                        />
                                    </FormItem>
                                    <FormItem label='Название компании' labelFor='company'>
                                        <Controller
                                            name='company'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextInput
                                                    {...field}
                                                    id='company'
                                                    onClear={() => resetField('company', { defaultValue: '' })}
                                                    isValid={!formState.errors?.company}
                                                    aria-required='true'
                                                />
                                            )}
                                        />
                                    </FormItem>
                                </Form>
                            </FormWrapper>

                            <ButtonWrapper>
                                <Button type='submit' form='edit-form'>
                                    Сохранить
                                </Button>
                            </ButtonWrapper>
                        </>
                    )}
                </Container>
            </Card>
            <Modal active={modalActive} setActive={setModalActiveCallback}>
                <UserEditSuccessMessage />
            </Modal>
        </>
    );
};

const FormWrapper = styled.div({
    [mediaQueries.desktop]: {
        maxWidth: '420px'
    }
});

const ButtonWrapper = styled.div({
    marginTop: '32px',
    [mediaQueries.mobile]: {
        marginTop: '24px'
    }
});
