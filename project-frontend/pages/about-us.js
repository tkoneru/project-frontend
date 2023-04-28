import {useForm} from "react-hook-form";
import data from "@/data/data";
import styles from "@/styles/about-us.module.css";


const About = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.saveCustomer(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>About Us</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.box}>
                            <label htmlFor="name">Tarun Koneru, Tate McKenny, and Jingwen Pang designed this service for the final project of C322.</label>
                        </div>

                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About;