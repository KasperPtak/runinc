import React from 'react'
import './ShopContent.scss'
import Shoe1 from '../../../IMG/shoe_01.jpg'
import Shoe2 from '../../../IMG/shoe_02.jpg'
import Shoe3 from '../../../IMG/shoe_03.jpg'
import Shoe4 from '../../../IMG/shoe_04.jpg'

const ShopContent = () => {
    return (
        <article id="ShopContent">

            <h2 className="ShopContentHeader">Shop</h2>

            <section className="row no-gutters">
                <div className="p-1 col-lg-4 col-6 ">
                    <div className="ShoeBorder p-2">
                        <img className="img-fluid" src={Shoe1} alt="Shoe1" title="Shoe1" />
                        <p>Puma Highland 3000 - Brown</p>
                    </div>
                </div>
                <div className="p-1 col-lg-4 col-6">
                    <div className="ShoeBorder p-2">
                        <img className="img-fluid" src={Shoe2} alt="Shoe1" title="Shoe1" />
                        <p>Puma Highland 3000 - Brown</p>
                    </div>
                </div>
                <div className="p-1 col-lg-4 col-6">
                    <div className="ShoeBorder p-2">
                        <img className="img-fluid" src={Shoe3} alt="Shoe1" title="Shoe1" />
                        <p>Puma Highland 3000 - Brown</p>
                    </div>
                </div>
                <div className="p-1 col-lg-4 col-6">
                    <div className="ShoeBorder p-2">
                        <img className="img-fluid" src={Shoe4} alt="Shoe1" title="Shoe1" />
                        <p>Puma Highland 3000 - Brown</p>
                    </div>
                </div>
                <div className="p-1 col-lg-4 col-6">
                    <div className="ShoeBorder p-2">
                        <img className="img-fluid" src={Shoe1} alt="Shoe1" title="Shoe1" />
                        <p>Puma Highland 3000 - Brown</p>
                    </div>
                </div>
                <div className="p-1 col-lg-4 col-6">
                    <div className="ShoeBorder p-2">
                        <img className="img-fluid" src={Shoe2} alt="Shoe1" title="Shoe1" />
                        <p>Puma Highland 3000 - Brown</p>
                    </div>
                </div>


            </section>


        </article>
    )
}

export default ShopContent