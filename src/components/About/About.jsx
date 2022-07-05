import React from 'react'
import './About.css'
// import ME from '../../assets/m_ack.png'
import {TbBrandJavascript} from 'react-icons/tb'
import {TiHtml5} from 'react-icons/ti'
import {GrReactjs} from 'react-icons/gr'

const About = () => {
  return (
      <section id={'about'}>
        <h5> Get To Know</h5>
        <h2> About Me</h2>

        <div className={'about__container'}>
          <div className={'about_me'}>
            {/* <img src={ME} alt={'me image'}/> */}
          </div>
        </div>

        <div className={'about_content'}>
          <div className={'about_cards'}>
            <article className={'about_card'}>
              <TbBrandJavascript className={'about_icon'}/>
              <h5>JavaScript</h5>
            </article>

            <article className={'about_card'}>
              <TiHtml5 className={'about_icon'}/>
              <h5>HTML</h5>
            </article>

            <article className={'about_card'}>
              <GrReactjs className={'about_icon'}/>
              <h5>ReactJS</h5>
            </article>
          </div>
          <p>
            Some text about me
          </p>
            <a href={'#Contacts'} className={'btn'}> Let's talk</a>
        </div>
      </section>
  )
}
export default About