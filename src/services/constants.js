class Constants {
    #base_url = "http://127.0.0.1:8000"
    base_url = "https://tools.joelokoniha.com"
    short_link_url = "/api/v1/short_link/"
    link_url = this.base_url + "/api/v1/links/"
    note_url = this.base_url + "/api/v1/notes/"
    file_url = this.base_url + "/api/v1/files/"
    search = this.base_url + "/api/v1/search/"
    test_currency_conv_url = this.base_url + "/api/v1/currency/"
    currency_conv_url = "https://tools.joelokoniha.com/api/v1/currency-converter-api/"
    contact_us_url = this.base_url + "/api/v1/contact-us/"

    getLinkType(section){
        let sect = this.link_url
        if (section === 'note')sect = this.note_url

        if(section === 'file') sect = this.file_url
        return sect
    }
}

export default Constants