import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, } from 'antd';
import { Context } from '../context/Context';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SignInForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { setToken } = useContext(Context)
    const onFinish = (values: { username: string, password: string }) => {
        setIsLoading(true)
        axios.get('http://localhost:3000/users').then(data => {
            const isUser = data.data.some((item: { username: string, password: string }) => item.username == values.username && item.password == values.password)
            setTimeout(() => {
                if (isUser) {
                    setTimeout(() => {
                        setToken(true)
                        location.pathname = '/'
                    }, 1000)
                } else {
                    toast.error('Bunday foydalanuvchi topilmadi!')
                }
                setIsLoading(false)
            }, 1000)
        })
    };

    return (
        <>
            <Toaster position='top-right' reverseOrder={false}/>
            <Form
                autoComplete='off'
                name="login"
                initialValues={{ remember: true }}
                style={{ maxWidth: 360 }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Iltimos foydalanuvchi nomini kiriting!' }]}
                >
                    <Input size='large' allowClear prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Iltimos parolni kiriting!' }]}
                >
                    <Input.Password allowClear size='large' prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button loading={isLoading} size='large' block type="primary" htmlType="submit">
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignInForm;