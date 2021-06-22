import { Form, Input, Select, Modal } from "antd";
import { useEffect, useState } from "react";
import { UserUpdateReq } from "../../../api/UserList";
import {SELECT_OPTIONS, USER} from "../../../constant";
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

function EditInfo(props) {
  const [form] = Form.useForm();
  const arr = USER;
  let isSuper =
    JSON.parse(window.sessionStorage.getItem("sztu_doc_user")).jur === 0
      ? false
      : true;

  useEffect(() => {
    let temp = {};
    for (var key in props.userData) {
      temp[key] = props.userData[key];
    }
    temp.jur = arr[temp.jur];
    form.setFieldsValue(temp);
  }, [props.userData]);

  const onSubmit = (values) => {
    let temp = {};
    for (var key in values) {
      temp[key] = values[key];
    }
    temp.jur = arr.indexOf(values.jur);
    UserUpdateReq(temp);
    props.changeVisible(false);
  };

  const onCancel = () => {
    console.log(props.userData);
    props.changeVisible(false);
  };

  return (
    <Modal
      visible={props.visible}
      title="用户信息编辑"
      okText="提交"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        initialValues={props.userData}
      >
        <Form.Item name="user_no" label="用户名">
          {props.userData.user_no}
        </Form.Item>
        <Form.Item name="jur" label="权限">
          <Select>
            {
              USER.map((item)=>{
                return <Option value={item}>{item}</Option>
              })
            }
          </Select>
        </Form.Item>
        <Form.Item name="name" label="姓名">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="手机号">
          <Input />
        </Form.Item>
        <Form.Item name="unit" label="单位">
          <Select name="unit">
            {
              SELECT_OPTIONS.map((item)=>{
                return <Option value={item} key={item}>{item}</Option>
              })
            }
          </Select>
        </Form.Item>
        <Form.Item name="password" label="修改密码">
          <Input placeholder="仅在需要修改密码时填写该字段" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditInfo;
