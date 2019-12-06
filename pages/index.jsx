import React, { Fragment } from 'react';
import Head from 'next/head';
import '../styles/Homepage.scss';

const Homepage = () => {
    return(
        <Fragment>
            <Head>
                <title>{ 'WEATHER MONITOR' }</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
        </Fragment>
    );
};

export default Homepage;