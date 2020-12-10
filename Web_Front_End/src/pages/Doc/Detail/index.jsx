import { useParams } from 'react-router-dom'

function Detail(props) {
  let params = useParams()
  let doc_no = params.doc_no
  return (
    <div>
      <div>{doc_no}</div>
    </div>
  )
}

export default Detail