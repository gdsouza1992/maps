import * as React from 'react';

import ArticleCardList from "../article/ArticleCardList";

const Home = () => {
    return (
        <section>
            <section>MAP GOES HERE</section>
            <section>
                <ArticleCardList initalCount={5}/>
            </section>
        </section>
    );
}


export default Home;
