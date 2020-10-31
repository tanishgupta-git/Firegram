import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const  ProgressBar = ({file,Setfile}) =>  {
    const {url,progress} = useStorage(file);

    useEffect(() => {
        if(url){
            Setfile(null);
        }
    }, [url,Setfile])
    return (
        <motion.div className='progress-bar' initial={{ width:0}} animate={{ width: progress + '%'}}></motion.div>
    )
}
export default ProgressBar;
