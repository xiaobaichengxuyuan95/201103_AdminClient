import React, { PureComponent } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import logo from './images/logo.png'
import './login.less'


export default class Login extends PureComponent {
  onFinish(values){
    const username = values.username
    const password = values.password

  };
  validatorPwd = (rule, value) => {
    
    if(!value) {
      return Promise.reject('密码必须输入');
    }else if(value.length < 4){
      return Promise.reject('密码不能小于4位');
    }else if(value.length > 12){
      return Promise.reject('密码不能大于12位');
      return Promise.resolve(value);
    }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
      return Promise.reject('必须是英文,数字或下划线组成');
    }else {
      return Promise.resolve();
    }
  }
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="" />
          <h1>React项目: 后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登录</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={e => this.onFinish(e)}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '用户名是必须',
                },
                {
                  min: 4,
                  message: '用户名不能少于4位',
                },
                {
                  max: 12,
                  message: '用户名不能大于12位',
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '必须是英文,数字或下划线组成',
                }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue=""
              rules={[
                {
                  validator: this.validatorPwd
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
