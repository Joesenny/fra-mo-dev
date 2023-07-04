import React from 'react'
import {motion} from 'framer-motion'  


const Skill = ({name, x, y}) => {

    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute'

        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        viewport={{once: true}}
        transition={{duration:1.05}}
        >
            {name}

        </motion.div>
    )
}





const Skills = () => {
    return (
        <>

            <h2 className='font-bold text-8xl mt-64 w-full text-center'
            > Skills</h2>

            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer'
                
                whileHover={{scale:1.05}}
                >
                    Web 
                </motion.div>
       
                <Skill name='CSS' x='-20vw' y='-11vw'/>
                <Skill name='Tailwind' x='-5vw' y='15vw'/>
                <Skill name='Javascript' x='0vw' y='20vw'/>
                <Skill name='Python' x='27vw' y='-15vw'/>
                <Skill name='Docker' x='15vw' y='-20vw'/>
                <Skill name='Django' x='29vw' y='-1vw'/>
                <Skill name='SQL' x='32vw' y='-10vw'/>
                <Skill name='MongoDB' x='24vw' y='-5vw'/>
                <Skill name='NextJS' x='-1vw' y='-9vw'/>
                <Skill name='Svelte' x='-17vw' y='5vw'/>
                <Skill name='Figma' x='13vw' y='10vw'/>
                <Skill name='React' x='-10vw' y='-15vw'/>
                <Skill name='HTML' x='-17vw' y='-7vw'/>
                <Skill name='Cloud' x='-30vw' y='-17vw'/>
                <Skill name='AWS' x='-34vw' y='10vw'/>
                <Skill name='Azure' x='-38vw' y='-10vw'/>
                <Skill name='Utility Based Learning' x='38vw' y='14vw'/>



            </div>





        </>
    )
}

export default Skills