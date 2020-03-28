import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktail",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, dolore!",
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hicking",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, dolore!",
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, dolore!",
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, dolore!",
            },
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="services"></Title> 
              <div className="services-center">
                  {this.state.services.map((item,index)=>{
                      return(
                          <article className="service" key={index}>
                              <span>{item.icon}</span>
                              <h6>{item.title}</h6>
                              <p>{item.info}</p>
                          </article>
                      )
                  })}
                  </div> 
            </section>
        )
    }
}
