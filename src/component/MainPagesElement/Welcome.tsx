import React from 'react';
import image1 from "../../static/imgMain/homepage_update.webp";
import image2 from "../../static/imgMain/homepage_graph.webp";
import image3 from "../../static/imgMain/homepage_indicators.webp";

const Welcome = () => {
    return (
        <>
            <div className={'up_div'}>
                <h1 className={'up_div_h1'}>Welcome to poe.ninja!</h1>
                <p className={'main_container_p'}>An economic and build overview of the action role-playing game Path of
                    Exile based on public stash
                    tab data.</p>
                <p className={'main_container_p'}>Path of Exile has a currency system consisting of various orbs and
                    scrolls with no fixed value.
                    Keeping on top of fluctuating exchange rates between the different currencies is almost
                    impossible.</p>
                <p className={'main_container_p'}>In addition to this the game has a several hundred unique items that
                    vary in price based on leagues,
                    popular builds, patch notes and reddit posts.</p>
                <p className={'main_container_p'}>This site crunches the numbers and performs the calculations so all
                    you have to worry about is
                    finding your next Exalted Orb.</p>
            </div>
            <div className={'middle_div'}>
                <div className="middle_inner">
                    <h2 className={'up_div_h2'}>Live Updating Overviews</h2>
                    <p className={'main_container_p'}>Keep the overviews open and the information keeps flowing to your
                        browser, so you can see current
                        rates at a glance.</p>
                    <img className={'middle_div_img'} src={image1} alt="image1"/>
                </div>
                <div className="middle_inner">
                    <h2 className={'up_div_h2'}>Explore Historical Data</h2>
                    <p className={'main_container_p'}>Interactive graphs of the last 120 days for currency and items.
                        How is the market developing?.</p>
                    <img className={'middle_div_img'} src={image2} alt="image2"/>
                </div>
                <div className="middle_inner">
                    <h2 className={'up_div_h2'}>Confidence Indicators</h2>
                    <p className={'main_container_p'}>Quickly assess how much information a given price is based on
                        using the green, yellow and red indicators.</p>
                    <img className={'middle_div_img'} src={image3} alt="image3"/>
                </div>
            </div>
            <div className={'bottom_div'}>
                <h2 className={'up_div_h2'}>How does it work?</h2>
                <p className={'main_container_p'}>The site constantly consumes Path of Exile's Public Stash Tab API,
                    keeping track of all relevant
                    items for sale.</p>
                <p className={'main_container_p'}>The data is analyzed and aggregated to approximate exchange rates
                    between currencies and prices of
                    items. The aggregation contains several steps to counteract the price manipulation attempted by some
                    sellers. Historical data is saved to track price developments over time.</p>
                <p className={'main_container_p'}>Updated exchange rates and prices are packaged up and pushed directly
                    to your browser.</p>
            </div>
        </>
    );
};

export default Welcome;