import * as React from 'react';
import { getArticles } from "../../common/state/articles/action";

type ArticleCardListState = {
    articles
}

class ArticleCardList extends React.Component<{},ArticleCardListState>{
    public state: ArticleCardListState = {
        articles: []
    }

    public componentDidMount() {
        getArticles()
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
            .catch(err => err.message);
    }

    public render() {
        const { articles } = this.state;
        if(articles && articles.length < 1) return null;
        return articles.map((item) => {
            return <div key={item._id.$oid}>
                <p>{ item.place }</p>
                <p>{ item.user }</p>
            </div>
        })
    }
}

export default ArticleCardList;
