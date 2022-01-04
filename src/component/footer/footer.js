import React from 'react'
import './footer.scss'
import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";


export default function footer() {
    return (
        <div>
            <footer>
                <section>
                <AiFillHome size={35} color={'white'}/>
                <MdAccountCircle size={35} color={'white'}/>
                </section>
            &copy; Foodstation 2022
            </footer>
        </div>
    )
}
