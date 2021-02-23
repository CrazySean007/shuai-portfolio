import React from "react"
import * as Styles from "./index.module.css"
import { Form, Input, Button } from 'antd';

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 12 },
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={Styles.login}>
            <div className={Styles.header}>
                123
            </div>
            <div className={Styles.form}>
                <Form

                    name="basic"
                    {...layout}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input autoComplete="new-password"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password autoComplete="new-password"/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;