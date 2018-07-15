import * as React from 'react';
import {getArticles} from "../../common/state/articles/action";

type ArticleCardListState = {
    articles
}

class ArticleCardList extends React.Component<{},ArticleCardListState>{
    public state: ArticleCardListState = {
        articles: []
    }

    public componentDidMount() {
        this.setState({
            articles: getArticles()
        })
    }

    public render() {
        const { articles } = this.state;
        if(articles && articles.length < 1) return null;
        debugger;
        return articles.map((item, i) => {
            return <li key={i}>Test</li>
        })
    }
}

export default ArticleCardList;
