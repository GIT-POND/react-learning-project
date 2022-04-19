import React from 'react'
import {NavPanel} from '../Components'
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home-bg'>
        <NavPanel/>
        <section className='center-pnl'>
            <h4 style={{position:'sticky',top:'0',padding:'.5em 2em', backgroundImage:'linear-gradient(rgba(255, 86, 120,1),rgba(255, 86, 120,1), rgba(255, 245, 155,.5))'}}>HOME</h4>
            <div>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>
                <section className='media-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, officia. Aperiam qui vitae nemo eveniet possimus placeat animi reprehenderit excepturi dolorem quasi amet, explicabo saepe soluta nihil eum maxime eaque perferendis pariatur! Eum sapiente, fugit saepe aliquid adipisci facilis quod dolores aut corporis? Commodi possimus odit eum est labore tempora sapiente, vel reiciendis ducimus ut et? Consequuntur error qui a dolore, rerum animi quae? Vel quas quidem illo error ullam minima, aliquam atque ex nesciunt! Minus esse porro ad voluptatibus vero ratione a modi, consequatur perspiciatis molestiae rem voluptate deserunt ex maxime quos. Consequatur blanditiis ducimus amet reiciendis nostrum dolore.</section>

            </div>

        </section>
        <section className='right-pnl'>
            <Link className='search-itm' to={'/Home'}><i className='material-icons' style={{fontSize:'1.25em'}}>search</i> Search</Link>
        </section>
    </div>
    </>
  )
}

export default Home