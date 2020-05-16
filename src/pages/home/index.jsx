import React from 'react'
import './styles.less'
import { Table, Divider, Button, Layout, Form, Input, Modal } from 'antd';
const { Header, Sider, Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Sex',
    dataIndex: 'sex'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Action',
    render: (text) => (
      <span>
        <Button type="primary">修改</Button>
        <Divider type="vertical" />
        <Button type="danger">删除</Button>
      </span>
    ),
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    sex: 'man',
    address: 'New York'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    sex: 'woman',
    address: 'London'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    sex: 'man',
    address: 'Sidney'
  },
]

const formItemLayout = {
  labelCol: {
    sm: { span: 3 }
  },
  wrapperCol: {
    sm: { span: 21 }
  }
}

@Form.create({
  
})

class Index extends React.Component {

  state = {
    visible: true
  }


  //显示模态框
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  //模态框确认并提交表单
  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    })
    this.setState({
      visible: false
    })
  }


  //模态框取消
  handleCancel = e => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='pages_home'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider className='sider'>Sider</Sider>
          <Layout>
            <Header className='header'>Header</Header>
            <Content className='content'>
              <Button
                type="primary"
                onClick={this.showModal}
              >
                添加
              </Button>
              <Table columns={columns} dataSource={data} />
            </Content>
          </Layout>
        </Layout>
        <div>
          {/* 对话框 */}
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Form {...formItemLayout} onSubmit={this.handleOk} className="login-form">
              <Form.Item label="name">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!' }],
                })(
                  <Input
                    placeholder="name"
                  />,
                )}
              </Form.Item>
              <Form.Item label="sex">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    type="password"
                    placeholder="sex"
                  />,
                )}
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Index


