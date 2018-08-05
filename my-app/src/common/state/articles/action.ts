import { mockArticleData } from "../../../mockData/articles";
import { Article, JSONtoArticle } from "../../../types/Article";
import { ApiQuery, get, makeError } from "../../utils/api";

export const GetArticles = () => {
    return mockArticleData.map(articleJson => JSONtoArticle(articleJson) as Article) as Article[];

    const query: Partial<ApiQuery> = {
        baseResource: 'articles'
    };

    get(query)
    .then(articlesJson => {
        return articlesJson.map(articleJson => JSONtoArticle(articleJson) as Article) as Article[];

    })
    .catch(err => {
        makeError(err);
        return [];
    });
};
