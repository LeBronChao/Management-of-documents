import { Radio, Input, Table } from 'antd';
import { useState, useEffect } from 'react';
import './index.css'
import { ExmListReq } from '../../../api/DocManage'
import {TYPE_OPTION} from "../../../constant";
const { Search } = Input;


function DocManage(props) {
  let [doc_type, setDocType] = useState('全部信息')
  let [doc_list, setDocList] = useState([])
  let [loading, setLoading] = useState(true)
  const columns = [
    {
      title: '序号',
      dataIndex: 'doc_no',
      key: 'doc_no',
      align: 'center',
      width: '60px'
    },
    {
      title: '类别',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      width: '110px'
    },
    {
      title: '发文单位',
      dataIndex: 'unit',
      key: 'unit',
      align: 'center',
      width: '188px'
    },
    {
      title: '公文标题',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      width: '506px',
      render: (value) => {
        let styleObj = {}
        styleObj.color = value[1] == 1 ? "red" : "black"
        styleObj.fontWeight = value[2] ? 700 : 400
        return (
          <div style={styleObj}>{value[0]}</div>
        )
      }
    },
    {
      title: '点击量',
      dataIndex: 'click_count',
      key: 'click_count',
      align: 'center',
      width: '80px'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: '104px',
      render: (status) => {
        switch (status) {
          case 0:
            return <div style={{ color: '' }}>未审批</div>
          case 1:
            return <div style={{ color: '#4CF140' }}>审批通过</div>
          case 2:
            return <div style={{ color: 'red' }}>审批不通过</div>
        }
      }
    },
    {
      title: '发文日期',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
      width: '116px'
    }
  ]

  useEffect(() => {
    ExmListReq(DocListRender, doc_type)
  }, [])


  function DocListRender(list) {
    for (let i = 0; i < list.length; i++) {
      let title = [list[i].title, list[i].color, list[i].bold]
      list[i].title = title
      list[i].date = list[i].date.slice(0, 10)
      delete list[i].color
      delete list[i].bold
    }
    setDocList(list)
    setTimeout(() => {
      setLoading(false)
    }, 500)

  }

  function GetDocList(e) {
    setLoading(true)
    setDocType(e.target.value)
    ExmListReq(DocListRender, e.target.value)
  }

  function SerachDoc(value) {
    ExmListReq(DocListRender, doc_type, value)
    setLoading(true)
  }

  useEffect(() => {
    setDocType(doc_type)
  }, [doc_type])

  useEffect(() => {
    setDocList(doc_list)
  }, [doc_list])


  return (
    <div className="sp" style={{ width: "1440px" }}>
      <div className="doclist-container">
        <div className="doclist-header row">
          <nav className="doclist-header-nav row">
            <Radio.Group value={doc_type} onChange={GetDocList}>
              {
                TYPE_OPTION.map((item)=>{
                  return <Radio.Button value={item} key={item}>{item}</Radio.Button>
                })
              }
            </Radio.Group>
          </nav>
          <Search
            placeholder="输入标题搜索"
            allowClear
            onSearch={SerachDoc}
            style={{ width: 360, margin: '0 0 0 316px ' }}
          />
        </div>
        <main className="doclist-body">
          <Table
            dataSource={doc_list}
            columns={columns}
            loading={loading}
            pagination={{ pageSize: 12 }}
            rowKey={(col) => col.doc_no}
            onRow={record => {
              return {
                onClick: event => {
                  props.history.push(`/Doc/ManageDetail/${record.doc_no}`)
                }, // 点击行
              };
            }} />
        </main>
      </div>
    </div>
  )
}

export default DocManage