import { useParams } from 'react-router-dom'

function Detail(props) {
  let params = useParams()
  console.log(params);
  return (
    <div>
      <div>{params.doc_no}</div>
    </div>
  )
}

export default Detail