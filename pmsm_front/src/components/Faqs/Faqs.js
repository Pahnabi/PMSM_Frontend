import React from 'react';
import {useState} from 'react'
import "./Faqs.css";

function Faqs() {
    const [selected,setSelected]=useState(null)
  const toggle=(i)=>{
    if(selected==i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='wrapper'>
      <div className='faqPage'>
        {data.map((item,i)=>(
          <div className='item'>
            <div className='title' onClick={()=>toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected ==i ? '-':'+'}</span>
            </div>
            <div className={selected ==i ? 'content show':'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data=[
  {question:'Question 1',answer:'Lorem ipsum dolor sit amet.'},
  {question:'Question 2',answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde commodi deleniti, impedit dignissimos at!'},
  {question:'Question 3',answer:'lorem'},
  {question:'Question 4',answer:'lorem'},
]

export default Faqs;
