class SearchPage
{
    constructor()
    {

        this.search_bar = '.search-input';
        this.search_result_count ='h3 .section-title';
         this.destination_menu = '.destination-menu';
    }



    searchText(context) {
        return element(by.css(this.search_bar)).sendKeys(context);
    }

    getSearchResultCount(){
        return element(by.css(this.search_result_count)).getText();
    }

    destinationMenu(){
        return element.all(by.css(this.destination_menu)).getText();
    }


}
module.exports = new SearchPage();