import * as React from 'react';
import { GetArticles } from '../../common/state/articles/action';
import { Article } from "../../types/models/Article";
import ArticleCardList from "../article/ArticleCardList";


type ArticlesState = {
    articles: Article[] | void
}


class Articles extends React.Component<{}, ArticlesState>{
    public state: ArticlesState = {
        articles: []
    };

    public componentDidMount () {
        debugger;
        const articles = GetArticles();
        this.setState({
            articles
        })
    }

    public render() {
        const { articles } = this.state;

        const articleList = articles ? <ArticleCardList articles={articles}/> : "No articles found"

        return (
            <div>
                {articleList}
            </div>
        );
    }
}

export default Articles;
