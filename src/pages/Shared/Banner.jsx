

import { easeOut, motion } from "motion/react"
import team1 from '../../assets/image/team-1.jpg'
import team2 from '../../assets/image/team-2.jpg'




const Banner = () => {
    return (
        <div>
            <div className=" bg-base-200  my-12  ">
                <div className=" max-w-7xl mx-auto flex flex-col gap-8 lg:gap-0 justify-evenly lg:flex-row-reverse  items-start md:items-center    min-h-96">
                    <div>

                        <motion.img
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            src={team1}
                            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 w-48  md:w-64 shadow-2xl" />
                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            src={team2}
                            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue- w-44  md:w-64 shadow-2xl" />
                    </div>




                    <div >
                        <motion.h1 animate={{ x: 100, }}
                            transition={{ duration: 3, delay: 3, ease: easeOut, repeat: Infinity }}
                            className=" text-3xl md:text-4xl lg:text-5xl font-bold">Latest <motion.span
                                animate={{ color: ['#ff5733', '#d7dd10', '#3f33ff'] }}
                                transition={{ duration: 1.5, delay: 2, ease: easeOut, repeat: Infinity }}
                            >Job</motion.span> for You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat  ut assumenda excepturi <br /> exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;