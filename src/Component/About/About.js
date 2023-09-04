import HomeImg from "../img/Praying Flat Design.jfif"
import { motion } from "framer-motion"
import "./About.css"
const About = ()=>{
    return(
        <div className="about" dir="rtl">
            <h1 className="title"><span>نبذه عن الاكادميه</span></h1>
            <div className="container ">
                <motion.div
                initial={{x:"5rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                >
                    <p>
                    يوفر موقع "أذكار المسلم" مجموعة متنوعة من الأذكار والأدعية التي تغطي مختلف المواقف والأحداث التي قد يواجهها المسلم في حياته اليومية. فمن خلال هذا الموقع، يمكن للمستخدم العثور على أذكار الصباح والمساء، وأذكار الوضوء والصلاة، وأذكار الطعام والشراب، وأذكار النوم والاستيقاظ، وغيرها من الأذكار التي تساعد المسلم على الاقتراب من الله وتعزيز الروحانية في حياته.
                    </p>
                </motion.div>
                <motion.img
                initial={{x:"-5rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                src={HomeImg} alt=""
                />
            </div>
        </div>
    )
}

export default About