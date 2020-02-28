import React from 'react'
import './ShopTab.scss'
import ShopMenu from './ShopMenu/ShopMenu'
import Shopcontent from './ShopContent/ShopContent'

const ShopTab = () => {
    return (
        <article className="row no-gutters">

            <section className="col-lg-3 ShopMenu">
                < ShopMenu />
            </section >


            <section className="col-lg-9 ShopContent">
                < Shopcontent />
            </section>







        </article >
    )
}

export default ShopTab
