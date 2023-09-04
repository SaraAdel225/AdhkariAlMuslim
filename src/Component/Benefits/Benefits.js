import { motion } from "framer-motion"
import BenImg  from "../img/Muslim Silhouette PNG Transparent, Silhouette Muslim Are To Allah, Background, Business, Character PNG Image For Free Download.jfif"
import BenImg1  from "../img/1.jfif"
import BenImg2  from "../img/2.png"
import BenImg3  from "../img/3.jfif"
import BenImg4  from "../img/4.png"
import BenImg5  from "../img/5.png"

import "./Benefits.css"
const Benefit = ()=>{
    return(
        <>
            <h1 className="title"><span> فوائد قراءة الاذكار </span></h1>
            <div className="benefit" dir="rtl">
            <div className="container">
                <motion.div
                initial={{x:"5rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="main"
                >
                    <img className="BenImg" src={BenImg} alt=""/>
                    <p>من فوائد قراءة الاذكار </p>
                </motion.div>
                    <motion.div
                    initial={{x:"5rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    className="section1"
                    >
                        <img className="BenImg" src={BenImg1} alt=""/>
                        <p>تأمل</p>
                        <h5>يساعد الاستمرار في الأذكار على تعزيز التأمل والانغماس في ذكر الله، مما يساعد على تهدئة العقل وتحقيق السكينة الداخلية.</h5>
                    </motion.div>
                    <motion.div
                    initial={{x:"5rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    className="section2"
                    >
                        <img className="BenImg" src={BenImg2} alt=""/>
                        <p>تواصل</p>
                        <h5>يعزز الاستمرار في الأذكار التواصل المستمر مع الله، ويعكس الرغبة في الاقتراب منه والاعتماد عليه في جميع الأحوال والمواقف.</h5>
                    </motion.div>
                    <motion.div
                    initial={{x:"5rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    className="section3"
                    >
                            <img className="BenImg" src={BenImg3} alt=""/>
                            <p>سلامة</p>
                        <h5>يحمي الأذكار المسلم من الشرور والمحن، ويُعزز الشعور بالحماية والراحة النفسية، كما يعكس الثقة في قدرة الله على حماية وسلامة المسلم.</h5>
                    </motion.div>
                    <motion.div
                    initial={{x:"5rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    className="section4"
                    >
                        <img className="BenImg" src={BenImg4} alt=""/>
                        <p>قربة</p>
                        <h5> يساعد الأذكار في تعزيز القربة إلى الله، حيث يُعتبر الذكر وسيلة للتقرب والاقتراب من الله، وتعزيز العلاقة الروحية بين المسلم وخالقه.</h5>
                    </motion.div>
                    <motion.div
                    initial={{x:"5rem" ,opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    className="section5"
                    >
                        <img className="BenImg" src={BenImg5} alt=""/>
                        <p>اطمئنان</p>
                        <h5> يوفر الاستمرار في الأذكار الاطمئنان والطمأنينة الداخلية، حيث يعكس الثقة العمياء في الله ورضاه بالقدر والمصير، ويساعد على تخفيف القلق والتوتر وتحقيق السلام الداخلي.</h5>
                    </motion.div>
            </div>
        </div>
        </>
    )
}

export default Benefit