import React from 'react';
import './App.scss';
import  Widget  from "./components/Widget"
import { mockFetch } from "./util/mockFetch"
import Paper from '@material-ui/core/Paper';

function App() {

  const [data, setData] = React.useState([])
  const [index, setIndex] = React.useState(null)

  React.useEffect(() => {
    mockFetch().then(res => res).then(data => setData(data))
  }, [])
  
  return (
    <div className="paper-wrapper">
      {
        data && data.map((item, idx) => {

          // isActive returns boolean indicating its matching with index that was clicked
          const isActive = index === idx

          return (
            <Paper key={item.id} onClick={()=>setIndex(idx)} elevation={ isActive? 10 : 1 } className="paper" >
              <Widget data={item} isActive={isActive} />
            </Paper>
          )
        })
      }
    </div>
  );
}

export default App;
