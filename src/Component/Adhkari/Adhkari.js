import React, { Component } from 'react';
import data from "./adhkar.json"
import imgAdhkar from "../img/download.jfif"
import "./Adhkari.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

class AdhKari extends Component {

    constructor(props) {
        super(props);
        this.state = {
        data: data,
        search: "",
        selectedText: null, 
        };
    }

    selectText = (category) => {
        this.setState({ selectedText: category });
    }

    updateCount = (subId) => {
        this.setState((prevState) => {
        const newData = [...prevState.data];
        for (const item of newData) {
            if (item.category === prevState.selectedText) {
            for (const subItem of item.array) {
                if (subItem.id === subId) {
                    if (subItem.count <= 1) {
                        subItem.count = 0 ;
                        subItem.color = 'white';
                        subItem.bgColor = '#71d62e'
                    }else{
                        subItem.count--;
                    }
                return { data: newData };
                }
            }
            }
        }
        return null;
        });
    }
    SearchChange = (event) => {
        this.setState({ search : event.target.value });
    };
    render() {
        const { data, selectedText } = this.state;
        const { search } = this.state;
        return (
            <div className="Adhkari">
                <h1 className="title"><span>اذكاري</span></h1>
                <div className="container">
                    <div className="Search" dir="rtl">
                        <input type="text" placeholder="ابحث هنا" onChange={this.SearchChange}/>
                    </div>
                <div className="cont">
                {
                    data
                    .filter((val) => this.state.search === "" || val.category.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                    <motion.div
                    initial={{x:"-5rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    key={item.id}>
                        <a href="#read"  className="sectionAdhkari" onClick={() => this.selectText(item.category)}>
                            <img src={imgAdhkar} alt=""/>
                            {item.category}
                        </a>
                    </motion.div>
                ))}
            </div>
            </div>

            {selectedText && (
            <div id="read">
                <h1 className="title"><span>{selectedText}</span></h1>
                <div className='read'>
                    <div className="container">
                    {data
                        .find((item) => item.category === selectedText)
                        .array.map((subItem) => (
                        <motion.div
                        initial={{x:"5rem" ,opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:2, type:"spring"}}
                                dir="rtl" className="readCoun"  key={subItem.id}
                        style={{ color: subItem.color || 'black',backgroundColor: subItem.bgColor || 'white' }}
                        >
                            <h5 style={{ backgroundColor: subItem.color || '#1797d8' , color: subItem.bgColor || 'white'}} onClick={() => this.updateCount(subItem.id)}> {subItem.count}{' '}</h5>
                            <p onClick={() => this.updateCount(subItem.id)}>{subItem.text}</p>
                            <button style={{ color: subItem.color || 'black'}} onClick={()=>{new Audio(`.${subItem.audio}`).play()}}><FontAwesomeIcon icon= {faVolumeHigh} /></button>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            )}
        </div>
        );
    }
}

export default AdhKari;