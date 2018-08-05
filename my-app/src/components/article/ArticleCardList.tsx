import * as React from 'react';
import { Article } from "../../types/Article";

type ArticleCardListProps = {
    articles: Article[]
}

class ArticleCardList extends React.Component<ArticleCardListProps, {}>{
    public render() {
        const { articles } = this.props;
        if(articles && articles.length < 1) return null;
        return articles.map((item: Article) => {
            return <li key={item.id}>
                <div>
                    <p>{ item.summary }</p>
                    <p>{ item.content }</p>
                </div>
            </li>
        })
    }
}

export default ArticleCardList;
