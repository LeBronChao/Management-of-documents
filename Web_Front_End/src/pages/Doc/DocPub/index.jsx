import { Radio, Input, Checkbox, Select, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react'
import './index.css'
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
const { Option } = Select


function DocPub() {
  const [doc_type, setdoc_type] = useState("")
  const [title, settitle] = useState("")
  const [if_red, setif_red] = useState("")
  const [if_bold, setif_bold] = useState(false)
  const [text, settext] = useState("")
  const [text_html, settext_html] = useState("")
  const [unit, setunit] = useState("")

  useEffect(() => {
    setdoc_type(doc_type)
    settitle(title)
    setif_bold(if_bold)
    setif_red(if_red)
  }, [doc_type, title, if_red, if_bold])

  return (
    <div className="doc-pub-page sp">
      <div className="doc-pub-container col">
        <div className="doc-pub-table col">
          <div className="doc-pub-table-row1 row cz">
            <div className="doc-pub-table-title">类别</div>
            <Radio.Group onChange={e => setdoc_type(e.target.value)} value={doc_type}>
              <Radio value="教学教务">教学教务</Radio>
              <Radio value="学术科研">学术科研</Radio>
              <Radio value="行政通知">行政通知</Radio>
              <Radio value="学生工作">学生工作</Radio>
              <Radio value="校园生活">校园生活</Radio>
            </Radio.Group>
          </div>
          <div className="doc-pub-table-row1 row cz">
            <div className="doc-pub-table-title">标题</div>
            <Input style={{ width: '399px' }} value={title} onChange={e => settitle(e.target.value)} />
            <Radio.Group onChange={e => setif_red(e.target.value)} value={if_red} className="doc-pub-color-radio row">
              <Radio value={false} className="row cz"><div className="doc-pub-color-box doc-pub-color-black cz"></div></Radio>
              <Radio value={true} className="row cz"><div className="doc-pub-color-box doc-pub-color-red cz"></div></Radio>
            </Radio.Group>
            <Checkbox onChange={e => { setif_bold(e.target.checked); console.log(if_bold) }} checked={if_bold}>粗体</Checkbox>
          </div>
          <div className="doc-pub-table-row2 row cz">
            <div className="doc-pub-table-title">正文</div>
            <BraftEditor
              className="doc-pub-table-edit"
              value={text}
              onChange={(value) => { settext(value); settext_html(value.toHTML()) }}
            />
          </div>
          <div className="doc-pub-table-row1 row cz" style={{ zIndex: 6 }}>
            <div className="doc-pub-table-title" style={{ marginLeft: 32 }}>发文部门</div>
            <Select defaultValue="" style={{ width: 200 }} allowClear value={unit} onChange={(val) => { setunit(val) }}>
              <Option value="1">大数据与互联网学院</Option>
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
              <Option value="创业创客与就业指导中心">创业创客与就业指导中心</Option>
              <Option value="国有资产与实验室管理部">国有资产与实验室管理部</Option>
              <Option value="教务部">教务部</Option>
              <Option value="计划财务部">计划财务部</Option>
              <Option value="图书馆">图书馆</Option>
              <Option value="安全保卫中心">安全保卫中心</Option>
              <Option value="后勤保障部<">后勤保障部</Option>
              <Option value="校团委">校团委</Option>
            </Select>
          </div>
          <div className="doc-pub-table-row1 row cz">
            <div className="doc-pub-table-title" style={{ marginLeft: 32 }}>上传附件</div>
            <Button icon={<UploadOutlined />} shape="round">上传附件</Button>
          </div>
        </div>
        <div className="doc-pub-button-container center">
          <Button shape="round" style={{ width: 160, height: 40, background: "#1990FF", color: "white", fontSize: 15 }}>发布</Button>
        </div>
      </div>
    </div>
  )
}

export default DocPub