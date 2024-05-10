import './TakeInput.css'
import { useEffect, useState } from "react";

function TakeInput(){

    

    let dataArr=JSON.parse(localStorage.getItem('lists'));
    let [listArr,setlistArr]=useState(dataArr || []);
    let [subject,setSubject]=useState('');
    let [hours,setHours]=useState(0);
    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(listArr))
       },[listArr])
    const myTaskObj={
        subject,
        hours,
    }
    function addTask(){
        setlistArr([...listArr,myTaskObj])
    }
    function deleteItem(idx){
      let filteredArr=listArr.filter((item,i)=>{
        return i!=idx;
      })
      setlistArr(filteredArr);
      }
      
    return (
       <>
        <div className='input-box'>
            <input type="text" placeholder='Enter a your Subject' className='ip ip-name' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            <input type="number" className='ip-no'  value={hours} onChange={(e)=>setHours(e.target.value)}/>
            <button className='add-btn' onClick={addTask} >Add Task</button>
        </div>
        {/* <TodoList list={listArr}/> */}
        <ol className="todo-list">
      {listArr.map((item, idx) => {
        return (
          <li className="each-item" key={idx}>
            <div className="sub-hour-box">
              <span className="subject">{item.subject}</span>
              <span className="hour">{item.hours} hours</span>
            </div>
            <div className="del-edit-box">
              <span>
                <img
                  src="https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle-thumbnail.png"
                  alt=""
                  height="20px"
                  className="edit-btn"
                  title='edit'
                />
              </span>
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                  alt=""
                  height="20px"
                  className="del-btn"
                  title='delete'
                  onClick={()=>deleteItem(idx)}
                />
              </span>
            </div>
          </li>
        );
      })}
    </ol>
        </>
    )
}
export default TakeInput;