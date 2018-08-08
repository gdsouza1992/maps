export type Article = {
    content: string;
    id: string;
    owner: string;
    summary: string;
    title: string;
}

export const JSONtoArticle = (data) => {
    return {
        content: data.article_content,
        id: data._id.$oid,
        owner: data.article_owner_id,
        summary: data.article_summary,
        title: data.article_title
    } as Article
}