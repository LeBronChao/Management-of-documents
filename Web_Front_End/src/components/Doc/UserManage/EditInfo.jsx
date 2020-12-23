import { Form, Input, Select, Modal } from "antd";
import { useEffect, useState } from "react";
import { UserUpdateReq } from "../../../api/UserList";
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

function EditInfo(props) {
  const [form] = Form.useForm();
  const arr = ["超级管理员", "总管理员", "部门管理员", "普通用户"];
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
    values.user_no = props.userData.user_no;
    UserUpdateReq(values);
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
            <Option value="0" disabled={isSuper}>
              超级管理员
            </Option>
            <Option value="1" disabled={isSuper}>
              总管理员
            </Option>
            <Option value="2">部门管理员</Option>
            <Option value="3">普通用户</Option>
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
            <Option value="大数据与互联网学院">大数据与互联网学院</Option>
            <Option value="中德智能制造学院">中德智能制造学院</Option>
            <Option value="创意与设计学院">创意与设计学院</Option>
            <Option value="健康与环境工程学院">健康与环境工程学院</Option>
            <Option value="新能源与新材料学院">新能源与新材料学院</Option>
            <Option value="城市交通与物流学院">城市交通与物流学院</Option>
            <Option value="商学院">商学院</Option>
            <Option value="药学院">药学院</Option>
            <Option value="体育与艺术学院">体育与艺术学院</Option>
            <Option value="质量与标准学院">质量与标准学院</Option>
            <Option value="工程物理学院">工程物理学院</Option>
            <Option value="研究生院">研究生院</Option>
            <Option value="党委组织部">党委组织部</Option>
            <Option value="党委宣传部">党委宣传部</Option>
            <Option value="党政办公室">党政办公室</Option>
            <Option value="科研与校企合作部">科研与校企合作部</Option>
            <Option value="国际合作与学生工作部">国际合作与学生工作部</Option>
            <Option value="采购与招投标管理中心">采购与招投标管理中心</Option>
            <Option value="信息中心">信息中心</Option>
            <Option value="校医院">校医院</Option>
            <Option value="创业创客与就业指导中心">
              创业创客与就业指导中心
            </Option>
            <Option value="国有资产与实验室管理部">
              国有资产与实验室管理部
            </Option>
            <Option value="教务部">教务部</Option>
            <Option value="计划财务部">计划财务部</Option>
            <Option value="图书馆">图书馆</Option>
            <Option value="安全保卫中心">安全保卫中心</Option>
            <Option value="后勤保障部<">后勤保障部</Option>
            <Option value="校团委">校团委</Option>
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
