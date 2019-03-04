import articlesData from "./articlesData";
import costumizationData from "./costumizationData";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchCostumizationData = () => {
    return delay(1000).then(() => {
        return Promise.resolve(costumizationData);
    });
}

export const fetchArticlesData = () => {
    return delay(1500).then(() => {
        return Promise.resolve(articlesData);
    });
}