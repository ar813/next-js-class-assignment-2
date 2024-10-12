import Image from "next/image"
import myImage1 from '../../image/sweets/1.jpg';
import myImage2 from '../../image/sweets/2.jpg';
import myImage3 from '../../image/sweets/3.jpg';
import myImage4 from '../../image/sweets/4.jpg';
import myImage5 from '../../image/sweets/5.jpg';
import myImage6 from '../../image/sweets/6.jpg';
import myImage7 from '../../image/sweets/7.jpg';
import myImage8 from '../../image/sweets/8.jpg';
import myImage9 from '../../image/sweets/9.jpg';
import myImage10 from '../../image/sweets/10.jpeg';
import myImage11 from '../../image/sweets/11.jpeg';
import myImage12 from '../../image/sweets/12.jpeg';
import myImage13 from '../../image/sweets/13.jpeg';
import myImage14 from '../../image/sweets/14.jpeg';
import myImage15 from '../../image/sweets/15.jpeg';
import sectionStyle from "./section.module.css"

export default function Section() {
    return (
        <section className={sectionStyle.section}>

            <h1>Popular Sweets</h1>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage1} alt="pic1"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage2} alt="pic2"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage3} alt="pic3"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage4} alt="pic4"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage5} alt="pic5"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage6} alt="pic6"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage7} alt="pic7"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage8} alt="pic8"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage9} alt="pic9"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage10} alt="pic10"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage11} alt="pic11"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage12} alt="pic12"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage13} alt="pic13"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage14} alt="pic14"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>

            <div className={sectionStyle.imgBox}>
                <Image src={myImage15} alt="pic15"></Image>
                <div>
                    <p>Price: $500</p>
                    <button>Order Now!</button>
                </div>
            </div>
            
        </section>
    )
}