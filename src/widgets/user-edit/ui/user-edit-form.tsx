import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    Box,
    Button,
    Card,
    Divider,
    Form,
    TextInput,
    Modal,
    Title,
    Loader,
    ErrorMessage,
    mediaQueries
} from 'src/shared/ui';
import { useMediaQuery } from 'src/shared/hooks';
import { matchMediaQueries } from 'src/shared/ui/styles/media-queries.ts';
import { css } from '@emotion/react';
import { FormItem } from 'src/shared/ui/components/form.tsx';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserEditSuccessMessage } from './user-edit-success-message.tsx';
import { IFormInput } from '../types/types.tsx';
import { useGetUser } from 'src/widgets/user-edit/api/queries.ts';

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
                <Title>Данные профиля</Title>
                <Divider mTop={isDesktop ? '16px' : '16px'} mBot={isDesktop ? '24px' : '20px'} />
                {isLoading && <Loader />}
                {isError && <ErrorMessage message='Something went wrong' />}
                {isSuccess && (
                    <>
                        <Box
                            css={css`
                                ${mediaQueries.desktop} {
                                    max-width: 420px;
                                }
                            `}
                        >
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
                                                isError={Boolean(formState.errors?.name)}
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
                                                isError={Boolean(formState.errors?.username)}
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
                                                isError={Boolean(formState.errors?.email)}
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
                                                isError={Boolean(formState.errors?.city)}
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
                                                isError={Boolean(formState.errors?.phone)}
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
                                                isError={Boolean(formState.errors?.company)}
                                                aria-required='true'
                                            />
                                        )}
                                    />
                                </FormItem>
                            </Form>
                        </Box>

                        <Box
                            css={css`
                                margin-top: 32px;
                            `}
                        >
                            <Button type='submit' form='edit-form'>
                                Сохранить
                            </Button>
                        </Box>
                    </>
                )}
            </Card>
            <Modal active={modalActive} setActive={setModalActiveCallback}>
                <UserEditSuccessMessage />
            </Modal>
        </>
    );
};
