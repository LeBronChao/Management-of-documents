import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { DocDetailReq } from '../../../api/Detail'
import { PaperClipOutlined, EyeOutlined } from '@ant-design/icons';
import './index.css'

function Detail(props) {
  let params = useParams()
  let doc_no = params.doc_no
  let [doc, setdoc] = useState({})
  useEffect(() => {
    DocDetailReq(doc_no, setdoc)
  }, [])

  return (
    <div className="detail sp">
      <div className="col">
        <div className="col detail_container">
          <div className="detail_title sp">{doc.title}</div>
          <div className="detail_type sp">{doc.type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{doc.pub_time}</div>
          <div className="detail_text" dangerouslySetInnerHTML={{ __html: doc.text_html }}></div>
          <div className="row detail_unit" style={{ margin: '160px 0 -20px 0' }}>{doc.unit}</div><br />
          <div className="row detail_unit">{doc.date}</div>
        </div>
        <div className="detail_msg row">
          <div>
            <PaperClipOutlined />
            <a href={doc.file_url} style={{ marginLeft: 8 }}>附件</a>
          </div>
          <div className="detail_click_container cz">
            <EyeOutlined />
            <div style={{ marginLeft: 8 }}>点击量：{doc.click_count}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail