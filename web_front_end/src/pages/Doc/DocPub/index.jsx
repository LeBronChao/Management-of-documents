import {Radio, Input, Checkbox, Select, Button} from 'antd'
import {UploadOutlined} from '@ant-design/icons';
import {useState, useEffect, useRef} from 'react'
import {DocPubReq} from '../../../api/DocPub'
import './index.css'
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import {SELECT_OPTIONS, TYPE_OPTION} from "../../../constant";

const {Option} = Select


function DocPub (props) {
    let user = JSON.parse(sessionStorage.getItem('sztu_doc_user'))
    const [doc_type, setdoc_type] = useState("")
    const [title, settitle] = useState("")
    const [if_red, setif_red] = useState(false)
    const [if_bold, setif_bold] = useState(false)
    const [text_state, settext_state] = useState(BraftEditor.createEditorState(null))
    const [text, settext] = useState("")
    const [text_html, settext_html] = useState("")
    const [unit, setunit] = useState(user.unit)
    const [file_name, setfile_name] = useState("")
    const [unit_disable, setunit_disable] = useState(user.jur >= 2 ? true : false)

    const text_ref = useRef()
    const doc_file = useRef()

    useEffect(() => {
        setdoc_type(doc_type)
        settitle(title)
        setif_bold(if_bold)
        setif_red(if_red)
    }, [doc_type, title, if_red, if_bold])

    function init () {
        setdoc_type('')
        settitle('')
        setif_bold(false)
        setif_red(null)
        settext('')
        settext_html('')
        text_ref.current.clearEditorContent()
        setunit("")
    }

    function nav () {
        props.history.push('/Doc/DocManage')
    }

    function importFile () {
        doc_file.current.click()

    }

    function Pub () {
        let str = "请填写"
        let bool = false
        if (!doc_type) {
            bool = true
            str += "公文类别 "
        }
        if (!title) {
            bool = true
            str += "公文标题 "
        }
        if (!text) {
            bool = true
            str += "公文正文 "
        }
        if (!unit) {
            bool = true
            str += "发文部门 "
        }
        if (bool) {
            alert(str)
        } else {
            let file
            if (doc_file.current.files[0]) {
                file = new FormData()
                file.append('avatar', doc_file.current.files[0])
            }
            DocPubReq(doc_type, title, if_red, if_bold, text, text_html, unit, file, file_name, nav)
        }
    }

    return (
        <div className="doc-pub-page sp">
            <div className="doc-pub-container col">
                <div className="doc-pub-table col">
                    <div className="doc-pub-table-row1 row cz">
                        <div className="doc-pub-table-title">类别</div>
                        <Radio.Group onChange={e => setdoc_type(e.target.value)} value={doc_type}>
                            {
                                TYPE_OPTION.slice(1).map((item) => {
                                    return <Radio value={item} key={item}>{item}</Radio>
                                })
                            }
                        </Radio.Group>
                    </div>
                    <div className="doc-pub-table-row1 row cz">
                        <div className="doc-pub-table-title">标题</div>
                        <Input style={{width: '399px'}} value={title} onChange={e => settitle(e.target.value)}/>
                        <Radio.Group onChange={e => setif_red(e.target.value)} value={if_red}
                                     className="doc-pub-color-radio row">
                            <Radio value={false} className="row cz">
                                <div className="doc-pub-color-box doc-pub-color-black cz"></div>
                            </Radio>
                            <Radio value={true} className="row cz">
                                <div className="doc-pub-color-box doc-pub-color-red cz"></div>
                            </Radio>
                        </Radio.Group>
                        <Checkbox onChange={e => {
                            setif_bold(e.target.checked);
                        }} checked={if_bold}>粗体</Checkbox>
                    </div>
                    <div className="doc-pub-table-row2 row cz">
                        <div className="doc-pub-table-title">正文</div>
                        <BraftEditor
                            className="doc-pub-table-edit"
                            value={text_state}
                            onChange={(value) => {
                                settext_state(value);
                                settext(value.toText());
                                settext_html(value.toHTML());
                            }}
                            ref={text_ref}
                        />
                    </div>
                    <div className="doc-pub-table-row1 row cz" style={{zIndex: 6}}>
                        <div className="doc-pub-table-title" style={{marginLeft: 32}}>发文部门</div>
                        <Select defaultValue="" style={{width: 200}} allowClear value={unit} onChange={(val) => {
                            setunit(val)
                        }} disabled={unit_disable}>
                            {
                                SELECT_OPTIONS.map((item) => {
                                    return <Option value={item} key={item}>{item}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div className="doc-pub-table-row1 row cz">
                        <div className="doc-pub-table-title" style={{marginLeft: 32}}>上传附件</div>
                        <Button icon={<UploadOutlined/>} shape="round" onClick={importFile}>选择文件</Button>
                        <input type="file" ref={doc_file} style={{display: 'none'}} onChange={(e) => {
                            setfile_name(e.target.files[0].name);
                        }}/>
                        <div style={{marginLeft: 10}}>{file_name}</div>
                    </div>
                </div>
                <div className="doc-pub-button-container center">
                    <Button
                        shape="round"
                        style={{width: 160, height: 40, background: "#1990FF", color: "white", fontSize: 15}}
                        onClick={Pub}
                    >发布</Button>
                    <Button
                        shape="round"
                        style={{width: 160, height: 40, fontSize: 15, marginLeft: 20}}
                        onClick={init}
                    >清空</Button>
                </div>
            </div>
        </div>
    )
}

export default DocPub