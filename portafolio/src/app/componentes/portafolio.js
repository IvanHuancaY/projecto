"use client"
import Image from "next/image"
import style from "./portafolio.module.css"



function Portafolio() {
    
    return (

        <div className={style.main}>
            <div className={style.container}>
                <div className={style.profile}>
                    <figure>
                        <Image src="/assets/images/perfil_picture.png" width={250} height={250} className={style.image_perfil}/>
                    </figure>
                    <div className={style.profile_info}>
                        <h1>Ivan Huanca Yujra</h1>
                        <br />
                        <p>Junior</p>
                        <br />
                        <div className={style.profile_social}>
                            <a href="https://github.com/IvanHuancaY" target="_blank">
                                <Image src="/assets/icons/github.svg" alt="github" class={style.profile_social_img} width={50} height={50} />
                            </a>
                            <a href="https://twitter.com/IvanHuancaYujr1" target="_blank">
                                <Image src="/assets/icons/twitter.svg" alt="twitter" class={style.profile_social_img} width={50} height={50} />
                            </a>
                            <a href="https://www.linkedin.com/in/ivan-huanca-yujra-b831822b0/" target="_blank">
                                <Image src="/assets/icons/linkedin.svg" alt="linkedin" class={style.profile_social_img} width={50} height={50} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCmSP7BAtK5qoVZOr2l-xwvg" target="_blank">
                                <Image src="/assets/icons/youtube.svg" alt="youtube" class={style.profile_social_img} width={50} height={50} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className={style.facts}>
                <div class={style.fact_item}>
                    <h2>7</h2>
                    <br /> <br />
                    <p>Years of work experience</p>
                </div>
                <div class={style.fact_item}>
                    <h2>50+</h2>
                    <br /> <br />
                    <p>Completed projects</p>
                </div>
                <div class={style.fact_item}>
                    <h2>20+</h2>
                    <br /> <br />
                    <p>Satisfied customers</p>
                </div>
            </div>

            <div className={style.buttons}>
            <button class={style.btn_primary} >
                <div class={style.btn_content}>
                    <p>Download CV</p>
                    <Image src="/assets/icons/download.svg" className={style.btn_primary_img} width={50} height={50}  />
                </div>
            </button>
            <a className={style.btn_secondary} href="mailto:contact@me.com">
                <div className={style.btn_content}>
                    
                    <p>Contact me</p>
                </div>
            </a>
            </div>
            <div className={style.tabs}>
                <button className={style.tabs_background_item_active}>
                    <p className={style.tabs_background_item_text} > Portfolio</p>
                </button>
                <button className={style.tabs_background_item}>
                    <p className={style.tabs_background_item_text}>Skills</p>
                </button>
            </div>

            <div className={style.project_container}>
                <div className={style.content_card_img}>
                    <Image className={style.image} src="/assets/images/Hero_2.png" height={250} width={250}/>
                    <div className={style.content_card_img_overlay}></div>
                        <div className={style.content_card_img_detail}>
                            <br />
                            <p className={style.title}>SmarterTrading411</p>
                            <br />
                            <br />
                            <p className={style.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                            <br />
                            <button className={style.btn}>
                                <Image src="/assets/icons/link.svg" alt="link" height={40} width={40} />
                            </button>
                    </div>
                </div>
                <div className={style.content_card_img}>
                    <Image className={style.image} src="/assets/images/bussiness_man.png" height={250} width={250} />
                    <div className={style.content_card_img_overlay}></div>
                </div>
                <div className={style.content_card_img}>
                    <Image className={style.image} src="/assets/images/pictures_wall.jpeg" height={250} width={250} />
                    <div className={style.content_card_img_overlay}></div>
                </div>
                <div className={style.content_card_img}>
                    <Image className={style.image} src="/assets/images/kitchen.jpeg" width={300}  height={250}  />
                    <div className={style.content_card_img_overlay}></div>
                </div>
                <div className={style.content_card_img}>
                    <Image className={style.image} src="/assets/images/mobile_app.png" width={250}height={250} />
                    <div className={style.content_card_img_overlay}></div>
                </div>
                <div className={style.content_card_img}>
                    <Image className={style.image} src="/assets/images/issima_page.png" width={250} height={250} />
                    <div className={style.content_card_img_overlay}></div>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;