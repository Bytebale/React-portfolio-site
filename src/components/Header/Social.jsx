import React from "react";
import {SiTelegram} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Social = () => {
    return (
        <div className={'Social'}>
            <a className={"a"} href={'https://github.com/Bytebale'} target={'_blank'}><BsGithub/></a>
            <a className={"a"} href={'https://t.me/GribovV'} target={'_blank'}><SiTelegram/></a>
        </div>
    )
}
export default Social